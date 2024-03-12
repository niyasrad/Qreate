from pymongo import MongoClient
from pymongo.database import Database
from typing import Generator

from dotenv import load_dotenv
import os

load_dotenv()
uri = os.getenv('M_URI')

MONGO_URL = uri
MONGO_DB_NAME = "Qreate"

client = MongoClient(MONGO_URL)
database = client[MONGO_DB_NAME]

def get_db() -> Generator:
    """
    Get the database connection
    
    Returns:
    - Generator: the database connection
    """
    db = database
    yield db
    