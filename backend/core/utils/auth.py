from jose import jwt, JWTError
from passlib.context import CryptContext
from datetime import datetime, timedelta

from dotenv import load_dotenv
import os

pwd_context = CryptContext(schemes=['bcrypt'], deprecated = 'auto')

load_dotenv()
SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = "HS256"

def create_access_token(data: dict, expires_delta: timedelta = None):
    """
    Create an access token
    
    Parameters:
    - data (dict): the data to be encoded in the token
    - expires_delta (timedelta): the expiration time
    
    Returns:
    - str: the access token
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(days=7)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
    
def verify_password(plain_password, hashed_password):
    """
    Verify the password
    
    Parameters:
    - plain_password (str): the plain password
    - hashed_password (str): the hashed password
    
    Returns:
    - bool: the result of the verification
    """
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    """
    Get the password hash

    Parameters:
    - password (str): the password

    Returns:
    - str: the hashed password
    """
    return pwd_context.hash(password)

def decode_access_token(token: str):
    """
    Decode the access token

    Parameters:
    - token (str): the access token

    Returns:
    - dict: the decoded token
    """
    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return decoded_token
    except JWTError:
        return None


