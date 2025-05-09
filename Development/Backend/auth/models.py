from pydantic import BaseModel, EmailStr
from typing import List

class UserSignup(BaseModel):
    username: str
    email: EmailStr
    password: str
    interests: List[str]

class UserLogin(BaseModel):
    username: str
    password: str
