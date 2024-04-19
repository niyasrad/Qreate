from fastapi import APIRouter, Depends, status, Request

from core.utils.errors import handle_exception, conflict_error
from core.utils.middlewares import authenticate_user

router = APIRouter(
    prefix = "/url",
    tags = ["url"]
)

@router.post("/edit-url", dependencies = [Depends(authenticate_user)], status_code = status.HTTP_200_OK)
async def edit_url(request: Request, custom_url: str):
    """
    Edit the custom URL of the brand

    Parameters:
    - request (Request): the request object
    - custom_url (str): the custom URL

    Returns:
    - dict: the response message
    """
    brand_collection = request.app.brands_collection
    brand_email = request.state.brand["brand_email"]
    existing_custom_url = request.state.brand["custom_url"]

    if not custom_url.isalnum():
        return {
            "message": "Custom URL should only contain alphanumeric characters!"
        }
    
    if existing_custom_url == custom_url:
        return {
            "message": "No changes made to the custom URL!"
        }

    try:
        find_brand = brand_collection.find_one({"custom_url": custom_url})
        if find_brand and find_brand["brand_email"] != brand_email:
            return conflict_error("Custom URL")
        brand_collection.update_one({"brand_email": brand_email}, {"$set": {"custom_url": custom_url}})
    
        return {
            "message": "Custom URL updated successfully!"
        }
    except Exception as e:
        return handle_exception(e)
    
@router.delete("/delete-url", dependencies = [Depends(authenticate_user)], status_code = status.HTTP_200_OK)
async def delete_url(request: Request):
    """
    Delete the custom URL of the brand

    Parameters:
    - request (Request): the request object

    Returns:
    - dict: the response message
    """
    brand_collection = request.app.brands_collection
    brand_email = request.state.brand["brand_email"]
    
    try:
        brand_collection.update_one({"brand_email": brand_email}, {"$set": {"custom_url": ""}})
    
        return {
            "message": "Custom URL deleted successfully!"
        }
    except Exception as e:
        return handle_exception(e)





    

