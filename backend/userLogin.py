from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from dbAccess import create_db_connection
from sqlalchemy.orm import Session
from sqlalchemy import text
from functools import wraps

import pandas as pd
import jwt
from datetime import datetime, timedelta
from userLoginInfo import SECRET_KEY, ACCESS_TOKEN_EXPIRE_MINUTES

userLoginRouter = APIRouter()
engine = create_db_connection()
connection = engine.connect()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")


# token 생성
def create_jwt_token(user_id: str) -> str:
    query = f"""
        SELECT * FROM
        user_information
        WHERE id = "{user_id}"
    """

    user_df = pd.read_sql(query, engine)

    # JWT payload 설정
    payload = {
        "id": user_df["id"].iloc[0],
        "company": user_df["company"].iloc[0],
        "name": user_df["name"].iloc[0],
        "email_address": user_df["email_address"].iloc[0],
        "user_type": user_df["user_type"].iloc[0],
        "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    }

    # JWT 생성 및 서명
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

    return {"token": token, "status": True}


def decode_jwt_token(token: str) -> dict:
    try:
        # JWT 디코딩
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


async def read_users_me(token: str = Depends(oauth2_scheme)):
    # JWT 디코딩하여 사용자 정보를 얻어옴
    user_info = decode_jwt_token(token)

    # 사용자를 식별하고 로그를 남길 수 있습니다.
    return {"user_id": user_info["sub"], "token": token}


# 로그인
@router.post("/login")
async def login(params: dict):
    user_id = params["login_info"]["id"]
    password = params["login_info"]["password"]

    query = f"""
        SELECT id, name, job_position, company, email_address, phone_number, user_type
        FROM structure3.user_information
        WHERE id = "{user_id}" AND password = "{password}"
    """

    login_df = pd.read_sql(query, engine)

    if login_df.empty:
        return {"token": "", "status": False}
    else:
        return create_jwt_token(user_id)


# 회원가입
@router.post("/sign_up")
async def sign_up(params: dict):
    user_id = params["join_info"]["id"]
    password = params["join_info"]["password"]
    name = params["join_info"]["name"]
    job_position = params["join_info"]["job_position"]
    company = params["join_info"]["company"]
    email_address = params["join_info"]["email_address"]
    phone_number = params["join_info"]["phone_number"]
    user_type = params["join_info"]["user_type"]

    with Session(engine) as session:
        session.execute(
            text(
                """
                INSERT INTO user_information VALUES (:user_id, :password, :name, 
                :job_position, :company, :email_address, :phone_number, :user_type);
            """
            ),
            {
                "user_id": user_id,
                "password": password,
                "name": name,
                "job_position": job_position,
                "company": company,
                "email_address": email_address,
                "phone_number": phone_number,
                "user_type": user_type,
            },
        )

        session.commit()

    return {"result": True}


# ID 중복성 검사
@router.post("/sign_up/check_id")
async def check_id_validity(params: dict):
    user_id = params["id_info"]["id"]

    query = f"""
        SELECT COUNT(*) as count
        FROM structure3.user_information
        WHERE id = "{user_id}"
    """

    count = pd.read_sql(query, engine)

    if count["count"].iloc[0] != 0:
        return {"result": False}
    else:
        return {"result": True}
