from fastapi import APIRouter, Depends, status, Request, UploadFile, File, Form
import os
import requests

from core.utils.errors import handle_exception, not_found_error
from core.utils.middlewares import authenticate_user

router = APIRouter(
    prefix = "/image",
    tags = ["image"]
)
@router.post("/update-logo", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK,)
@router.post("/add-logo", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK,)
async def add_logo(request: Request, file: UploadFile = File(None), img_url: str = Form(None)):

    """
    Adds a profile logo to the user.

    Parameters:
    - request (Request): the request object
    - file (UploadFile): file to be uploaded
    - img_url (str): image URL

    Returns:
    - dict: response message
    """
    brand = request.state.brand
    brand_id = brand["_id"]
    file_name = f"{brand_id}.png"
    os.makedirs(os.path.dirname(f"cdn_assets/brand/{file_name}"), exist_ok=True)
    if file:
        try:
            with open(f"cdn_assets/brand/{file_name}", "wb") as f:
                f.write(file.file.read())
            brand_collection = request.app.brands_collection
            if brand_collection.find_one({"_id": brand_id}):
                brand_collection.update_one({"_id": brand_id}, {"$set": {"image_url": True}})
        except Exception as e:
            raise handle_exception(e)
        
    elif img_url:
        try:
            response = requests.get(img_url)
            brand_collection = request.app.brands_collection
            if brand_collection.find_one({"_id": brand_id}):
                brand_collection.update_one({"_id": brand_id}, {"$set": {"image_url": True}})
        except Exception as e:
            raise handle_exception(e)
        if response.status_code != 200:
            raise not_found_error("image")

        try:
            with open(f"cdn_assets/brand/{file_name}", "wb") as f:
                f.write(response.content)
        except Exception as e:
            raise handle_exception(e)
        
    else:
        raise not_found_error("file")

    return {"message": "User Picture Added Successfully!"}

@router.delete("/delete-picture", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK,)
async def delete_picture(request: Request):

    """
    Deletes the profile picture of the user.

    Parameters:
    - request (Request): the request object

    Returns:
    - dict: response message

    """
    brand = request.state.brand
    brand_id = brand["_id"]
    file_name = f"{brand_id}.png"

    try:
        os.remove(f"cdn_assets/brand/{file_name}")
        brand_collection = request.app.brands_collection
        if brand_collection.find_one({"_id": brand_id}):
            brand_collection.update_one({"_id": brand_id}, {"$set": {"image_url": False}})
    except Exception as e:
        raise handle_exception(e)

    return {"message": "User Picture Deleted Successfully!"}