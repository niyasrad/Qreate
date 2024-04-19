from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from pymongo import MongoClient
from dotenv import load_dotenv
import os
from api import auth, faq, brand, image, url
from core.utils.middlewares import init_middlewares

app = FastAPI(
    title="Qreate",
    description="FAQ page generator.",
    version="0.1.0"
)

os.makedirs(os.path.dirname(f"cdn_assets/"), exist_ok=True)
app.mount("/cdn_asset/", StaticFiles(directory="cdn_assets"), name="static")

init_middlewares(app)

load_dotenv()
MONGO_URL = os.getenv('M_URI')

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(MONGO_URL, uuidRepresentation="standard")
    database = app.mongodb_client["Qreate"]
    app.brands_collection = database.get_collection("brands")
    server_info = app.mongodb_client.server_info()
    print(f"Connected to MongoDB server {server_info['version']}")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to Qreate!"}

app.include_router(auth.router)
app.include_router(faq.router)
app.include_router(brand.router)
app.include_router(image.router)
app.include_router(url.router)
