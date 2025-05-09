from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr
from bson import ObjectId
import jwt
import os
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta

app = FastAPI()

# Middleware for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["aimers_db"]
users_collection = db["users"]

# JWT setup
SECRET_KEY = "supersecretkey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class User(BaseModel):
    username: str
    email: EmailStr
    password: str
    interests: list[str]


class LoginRequest(BaseModel):
    username: str
    password: str


def create_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


@app.post("/signup")
async def signup(user: User):
    if users_collection.find_one({"username": user.username}):
        raise HTTPException(status_code=400, detail="Username already exists")
    
    hashed_pwd = pwd_context.hash(user.password)
    user_data = {
        "username": user.username,
        "email": user.email,
        "password": hashed_pwd,
        "interests": user.interests,
    }
    users_collection.insert_one(user_data)
    return {"message": "User created successfully"}


@app.post("/login")
async def login(user: LoginRequest):
    user_in_db = users_collection.find_one({"username": user.username})
    if not user_in_db or not pwd_context.verify(user.password, user_in_db["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token({"sub": user.username})
    return {"access_token": token, "token_type": "bearer", "username": user.username}


@app.get("/me")
def read_users_me(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        user = users_collection.find_one({"username": username})
        return {"username": username, "interests": user["interests"]}
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
