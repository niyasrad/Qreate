from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from fastapi import Request, Depends

from core.utils.errors import unauthorized_error
from core.utils.auth import decode_access_token 
from core.utils.db import get_db

from pymongo.database import Database

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
    role: str,
    token: str = Depends(oauth2_scheme),
    db: Database = Depends(get_db),
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
        brand_name: str = payload.get("brand_name")
        if brand_name is None:
            raise unauthorized_error()
        
        name = db.users.find_one({"brand_name": brand_name})

        if name is None:
            raise unauthorized_error()
    
    except:
        raise unauthorized_error()
    


        

        
    


    

    
    