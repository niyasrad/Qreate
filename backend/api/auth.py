from fastapi import APIRouter, Depends, Request, status

from core.utils.auth import create_access_token, get_password_hash, verify_password
from core.utils.errors import credential_error, handle_exception, conflict_error
from core.utils.middlewares import authenticate_user
from core.schema.brand import Brand,BrandAuth,BrandLogin

from pymongo.collection import Collection

router = APIRouter(
    prefix="/authenticate",
    tags=["auth"],
)


@router.post("/login", status_code=status.HTTP_200_OK)
async def login_user(brand: BrandLogin, request: Request):
    """
    Brand login

    Parameters:
    - user (BrandLogin): the user details for login
    - db (Database): the database connection

    Returns:
    - dict: the response message and the access token
    """ 
    try:
        brands_collection: Collection = request.app.brands_collection
        brand_find = brands_collection.find_one({"brand_email": brand.brand_email})
    except Exception as e:
        raise handle_exception(e)

    if not brand_find or not verify_password(brand.brand_password, brand_find["brand_password"]):
        raise credential_error()       
    try:
        access_token = create_access_token(
            data={"brand_id": str(brand_find["_id"])}
        )
        return {
            "message":"User logged in sucessfully!",
            "data": {
                "access_token": access_token,
                "_id": str(brand_find["_id"]),
                "brand_name": brand_find["brand_name"],
                "brand_email": brand_find["brand_email"]
            }
        }
    except Exception as e:
        raise handle_exception(e)
    
@router.post("/register", status_code=status.HTTP_200_OK)
async def register_user(brand: BrandAuth,request: Request):
    """
    Brand registration

    Parameters:
    - user (BrandAuth): the user details for registration
    - db (Database): the database connection

    Returns:
    - dict: the response message and the access token
    """
    try:
        brands_collection: Collection = request.app.brands_collection
        existing_brand = brands_collection.find_one({"brand_email": brand.brand_email})
    except Exception as e:
        raise handle_exception(e)
    
    if existing_brand:
        raise conflict_error("User")
    try: 
        hashed_pwd = get_password_hash(brand.brand_password)
        brand_dump = brand.model_dump()
        
        new_brand = Brand(
            brand_name = brand.brand_name,
            brand_email = brand.brand_email,
            brand_password = hashed_pwd
        )

        inserted_user = brands_collection.insert_one(new_brand.model_dump())
        brand_dump.pop("brand_password")
        inserted_user_data = {"_id": str(inserted_user.inserted_id), **brand_dump}

        access_token = create_access_token(
            data={"brand_id": str(inserted_user.inserted_id)})

        return {
            "message":"User registered sucessfully!",
            "data": {
                "access_token": access_token,
                "_id": str(inserted_user_data["_id"]),
                "brand_name": inserted_user_data["brand_name"],
                "brand_email": inserted_user_data["brand_email"]
            }   
        }
        
    except Exception as e:
        raise handle_exception(e)


@router.post("/check", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def authenticate_check(request: Request):
    """
    Authenticate user

    Parameters:
    - request (Request): the request object

    Returns:
    - dict: the response message
    """
    return {
        "message": "User authenticated successfully",
        "data": {
            "_id": str(request.state.brand["_id"]),
            "brand_name": request.state.brand["brand_name"],
            "brand_email": request.state.brand["brand_email"]
        }
    }




