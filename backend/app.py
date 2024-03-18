from fastapi import FastAPI
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from api import auth
from core.utils.middlewares import init_middlewares

load_dotenv()

app = FastAPI(
    title="Qreate",
    description="FAQ page generator.",
    version="0.1.0"
)

init_middlewares(app)

MONGO_URL = os.getenv('M_URI')

@app.on_event("startup")
def startup_db_client():
    mongodb_client = MongoClient(MONGO_URL)
    database = mongodb_client["Qreate"]
    app.brands_collection = database.get_collection("brands")
    server_info = mongodb_client.server_info()
    print(f"Connected to MongoDB server {server_info['version']}")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


@app.get("/")
def read_root():
    return {"message": "Welcome to Qreate!"}

app.include_router(auth.router)