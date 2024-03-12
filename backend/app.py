from fastapi import FastAPI
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from api import auth

load_dotenv()

app = FastAPI(
    title="Qreate",
    description="FAQ page generator.",
    version="0.1.0"
)

MONGO_URL = os.getenv('M_URI')

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(MONGO_URL)
    app.database = app.mongodb_client["Qreate"]
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


@app.get("/")
def read_root():
    return {"message": "Welcome to Qreate!"}

app.include_router(auth.router)
