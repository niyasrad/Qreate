from fastapi import APIRouter, Depends, HTTPException, status

from core.utils.auth import create_access_token, get_password_hash, verify_password
from core.utils.db import get_db
from core.utils.errors import credential_error, handle_exception, conflict_error
from core.schema.brand import Brand,BrandAuth,BrandLogin

from pymongo.database import Database
from pymongo.collection import Collection

router = APIRouter(
    prefix="/authenticate",
    tags=["auth"],
)


@router.post("/login")
async def login_user(user: BrandLogin, db: Database = Depends(get_db)):
    """
    Brand login

    Parameters:
    - user (BrandLogin): the user details for login
    - db (Database): the database connection

    Returns:
    - dict: the response message and the access token
    """ 
    try:
        users_collection: Collection = db.get_collection("users")
        user_find = users_collection.find_one({"brand_email": user.brand_email})
    except Exception as e:
        raise handle_exception(e)

    if not user_find or not verify_password(user.brand_password, user_find["brand_password"]):
        raise credential_error()       
    try:
        access_token = create_access_token(data={"sub": str(user_find["_id"])})
        return {
            "message":"User logged in sucessfully!",
            "access_token": access_token
        }
    except Exception as e:
        raise handle_exception(e)
    
@router.post("/register")
async def register_user(user: BrandAuth, db: Database = Depends(get_db)):
    """
    Brand registration

    Parameters:
    - user (BrandAuth): the user details for registration
    - db (Database): the database connection

    Returns:
    - dict: the response message and the access token
    """
    try:
        users_collection: Collection = db.get_collection("users")
        existing_user = users_collection.find_one({"brand_email": user.brand_email})
    except Exception as e:
        raise handle_exception(e)
    
    if existing_user:
        raise conflict_error("User")
    try: 
        hashed_pwd = get_password_hash(user.brand_password)
        user_dump = user.model_dump()
        
        new_brand = Brand(
            brand_name = user.brand_name,
            brand_email = user.brand_email,
            brand_password = hashed_pwd
        )

        inserted_user = users_collection.insert_one(new_brand.model_dump())
        user_dump.pop("brand_password")
        inserted_user_data = {"_id": str(inserted_user.inserted_id), **user_dump}

        access_token = create_access_token(
            data={"sub": str(inserted_user.inserted_id)})

        return {
            "message":"User registered sucessfully!",
            "access_token": access_token, 
            "data": inserted_user_data
        }
        
    except Exception as e:
        raise handle_exception(e)





