from fastapi import APIRouter, Depends, status, Request

from bson import ObjectId

from core.utils.middlewares import authenticate_user
from core.schema.brand import BrandProfile
from core.utils.errors import handle_exception, not_found_error

router = APIRouter(
    prefix="/brand",
    tags=["brand"],
)

@router.get("/get-brand", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def get_brand(request: Request):
    """
    Get the brand details

    Returns:
    - dict: the response message and the brand details
    """
    try:
        return {
            "message":"Brand fetched successfully!",
            "data": {
                "_id": str(request.state.brand["_id"]),
                "brand_name": request.state.brand["brand_name"],
                "brand_desc": request.state.brand["brand_desc"],
                "brand_email": request.state.brand["brand_email"],
                "image_url": request.state.brand["image_url"],
                "custom_url": request.state.brand["custom_url"] 
            }
        }
    except Exception as e:
        raise handle_exception(e)
     
@router.put("/update-profile", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def update_brand_profile(request: Request, brand: BrandProfile):
    """
    Update the brand profile

    Parameters:
    - request (Request): the request object
    - brand (BrandProfile): the brand profile

    Returns:
    - dict: the response message
    """

    try:
        brand_collection = request.app.brands_collection
        brand_email = request.state.brand["brand_email"]
        brand = brand.model_dump()
        brand_find = brand_collection.find_one({"brand_email": brand_email})
    except Exception as e:
        raise handle_exception(e)
    
    if brand_find:
        update_data = {}
        if brand.get("brand_name"):
            update_data.update({"brand_name": brand["brand_name"]})
        if brand.get("brand_desc"):
            update_data.update({"brand_desc": brand["brand_desc"]}) 
        brand_collection.update_one({"brand_email": brand_email}, {"$set": update_data})
        return {
            "message":"Profile updated successfully!"
        }
    else:
        raise not_found_error("brand")
       
@router.get("/{custom_url}", status_code=status.HTTP_200_OK)
@router.get("/id/{brand_id}", status_code=status.HTTP_200_OK)
async def get_public_brand(request: Request, brand_id: str = None, custom_url: str = None):
    """
    Get the public brand details

    Parameters:
    - request (Request): the request object
    - brand_id (str): the brand ID
    - custom_url (str): the custom URL

    Returns:
    - dict: the response message and the brand details
    """
    try:
        brand_collection = request.app.brands_collection
        brand = brand_collection.find_one({"_id": ObjectId(brand_id)}) if brand_id else brand_collection.find_one({"custom_url": custom_url})
    except Exception as e:
        raise handle_exception(e)
    
    if brand:
        return {
            "message":"Brand fetched successfully!",
            "data": {
                "brand_id": str(brand["_id"]),
                "brand_name": brand["brand_name"],
                "brand_desc": brand["brand_desc"],
                "brand_email": brand["brand_email"],
                "image_url": brand["image_url"],
                "custom_url": brand["custom_url"],
                "faq": brand["FAQList"],
            }
        }
    else:
        raise not_found_error("brand")
    