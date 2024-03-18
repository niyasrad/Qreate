from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from fastapi import Request, Depends

from core.utils.errors import unauthorized_error
from core.utils.auth import decode_access_token 

from pymongo.database import Collection

from bson import ObjectId

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def init_middlewares(app):
    """
    Initialize the middlewares
    
    Parameters:
    - app: the FastAPI app
    
    Returns:
    - None
    """
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["*"],
    )

async def authenticate_user(
    request: Request,
    token: str = Depends(oauth2_scheme)
):
    """
    Authenticate the user
    
    Parameters:
    - request (Request): the request object
    - role (str): the role of the user
    - token (str): the access token
    - db (Database): the database connection
    
    Returns:
    - None
    """
    if not token:
        raise unauthorized_error()
    
    try:
        payload = decode_access_token(token)
        brand_id = payload.get("brand_id")

        if brand_id is None:
            raise unauthorized_error()
        
        brands_collection: Collection = request.app.brands_collection
        brand_find = brands_collection.find_one({"_id": ObjectId(brand_id)})

        if brand_find is None:
            raise unauthorized_error()
        request.state.brand = brand_find

    except:
        raise unauthorized_error()
    


        

        
    


    

    
    