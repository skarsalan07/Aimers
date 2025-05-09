from fastapi import APIRouter
from auth.models import UserSignup, UserLogin
from auth.auth_utils import hash_password, verify_password
from pymongo import MongoClient

router = APIRouter()

# MongoDB connection
client = MongoClient("mongodb://localhost:27017")
db = client["aimers"]

@router.post("/signup")
def signup(user: UserSignup):
    if db.users.find_one({"username": user.username}):
        return {"error": "Username already exists"}
        
    hashed_pwd = hash_password(user.password)
    db.users.insert_one({
        "username": user.username,
        "email": user.email,
        "password": hashed_pwd,
        "interests": user.interests
    })
    return {"message": "Signup successful"}

@router.post("/login")
def login(user: UserLogin):
    db_user = db.users.find_one({"username": user.username})
    if not db_user or not verify_password(user.password, db_user["password"]):
        return {"error": "Invalid credentials"}

    return {
        "message": "Login successful",
        "username": db_user["username"],
        "interests": db_user.get("interests", [])
    }
