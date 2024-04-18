from fastapi import APIRouter, Depends, status, Request

from core.utils.middlewares import authenticate_user
from core.schema.brand import BrandProfile
from core.utils.errors import handle_exception, not_found_error

router = APIRouter(
    prefix="/profile",
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
                "brand_name": request.state.brand["brand_name"],
                "brand_desc": request.state.brand["brand_desc"],
                "brand_email": request.state.brand["brand_email"],
                "image_url": request.state.brand["image_url"]
            }
        }
    except Exception as e:
        raise handle_exception(e)
     
@router.put("/update-profile", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def update_brand_profile(request: Request, brand: BrandProfile):
    try:
        brand_collection = request.app.brands_collection
        brand_email = request.state.brand["brand_email"]
        brand = brand.model_dump()
        print(brand)
        if brand_collection.find_one({"brand_email": brand_email}):
            update_data = {}
            print(brand.get("brand_name"),brand.get("brand_desc"))
            if brand.get("brand_name"):
                update_data.update({"brand_name": brand["brand_name"]})
            if brand.get("brand_desc"):
                update_data.update({"brand_desc": brand["brand_desc"]}) 
            print(update_data)
            brand_collection.update_one({"brand_email": brand_email}, {"$set": update_data})
            return {
                "message":"Profile updated successfully!"
            }
        else:
            raise not_found_error("brand")
        
    except Exception as e:
        raise handle_exception(e)