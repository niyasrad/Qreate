from fastapi import APIRouter, Depends, Request, status

from core.utils.errors import validation_error, handle_exception
from core.utils.middlewares import authenticate_user
from core.schema.faq import FAQItem, FAQDetails, FAQUpdate
from core.utils.faq import order_check, order_change

from typing import List

import uuid

router = APIRouter(
    prefix="/faq",
    tags=["faq"],
)

@router.get("/get-faqs", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def get_all_faq(request: Request):
    """
    Get all FAQs

    Returns:
    - dict: the response message and the list of FAQs
    """
    try:
        return {
            "message":"FAQs fetched successfully!",
            "data": {
                "faq_list": request.state.brand["FAQList"]
            }
        }
    except Exception as e:
        raise handle_exception(e)
    
@router.post("/add-faq", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_201_CREATED)
async def add_faq(request: Request, faq: FAQItem):
    """
    Add a new FAQ

    Parameters:
    - request (Request): the request object
    - faq (FAQItem): the FAQ item

    Returns:
    - dict: the response message
    """
    try:
        brand_collection = request.app.brands_collection
        faq_list = request.state.brand["FAQList"]
        faq.faq_id = uuid.uuid4()
        faq = faq.model_dump()

        if not faq_list:
            faq_list = []

        if not order_check(faq_list, faq):
            raise validation_error("order")
       
        faq_list = order_change(faq_list, faq, "add")
       
        faq_list.append(faq)
        
        brand_collection.update_one(
            {"_id": request.state.brand["_id"]},
            {"$set": {"FAQList": faq_list}}
        )

        return {
            "message": "FAQ added successfully",
            "faq": faq
        }
    except Exception as e:
        raise handle_exception(e)
    

@router.put("/update-faq", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def update_faq(request: Request, faq: FAQDetails):
    """
    Update an existing FAQ

    Parameters:
    - request (Request): the request object
    - faq (FAQDetails): the FAQ item

    Returns:
    - dict: the response message
    """
    try:
        brand_collection = request.app.brands_collection
        faq_list = request.state.brand["FAQList"]
        faq = faq.model_dump()
        
        if not order_check(faq_list, faq):
            raise validation_error("order")
        
        faq_list = order_change(faq_list, faq, "update")
        
        brand_collection.update_one(
            {"_id": request.state.brand["_id"]},
            {"$set": {"FAQList": faq_list}}
        )

        return {
            "message": "FAQ updated successfully",
            "faq": faq
        }
    except Exception as e:
        raise handle_exception(e)
    
@router.put("/update-faq-qa", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def update_faq_qa(request: Request, faq: FAQUpdate):
    """
    Update an existing FAQ's question and answer

    Parameters:
    - request (Request): the request object
    - faq (FAQUpdate): the FAQ item

    Returns:
    - dict: the response message
    """
    try:
        brand_collection = request.app.brands_collection
        faq_list = request.state.brand["FAQList"]
        
        for faq_item in faq_list:
            if str(faq_item["faq_id"]) == faq.faq_id:
                faq_item["question"] = faq.question
                faq_item["answer"] = faq.answer
                break
        
        brand_collection.update_one(
            {"_id": request.state.brand["_id"]},
            {"$set": {"FAQList": faq_list}}
        )

        return {
            "message": "FAQ updated successfully",
            "faq": faq
        }
    except Exception as e:
        raise handle_exception(e)
    

@router.put("/update-all-faqs", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def update_all_faqs(request: Request, faq_list: List[FAQDetails]):
    """
    Update all FAQs

    Parameters:
    - request (Request): the request object
    - faq_list (List[FAQItem]): the list of FAQs

    Returns:
    - dict: the response message
    """
    try:
        brand_collection = request.app.brands_collection
        faq_list = [faq.model_dump() for faq in faq_list]

        brand_collection.update_one(
            {"_id": request.state.brand["_id"]},
            {"$set": {"FAQList": faq_list}}
        )

        return {
            "message": "All FAQs updated successfully"
        }
    except Exception as e:
        raise handle_exception(e)
    

@router.delete("/delete-faq", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def delete_faq(request: Request, faq_id: str):
    """
    Delete an existing FAQ

    Parameters:
    - request (Request): the request object
    - faq_id (str): the FAQ id

    Returns:
    - dict: the response message
    """
    try:
        brand_collection = request.app.brands_collection
        faq_list = request.state.brand["FAQList"]
        
        for faq in faq_list:
            if str(faq["faq_id"]) == faq_id:
                faq_list = order_change(faq_list, faq, "delete")
                faq_list.remove(faq)
                break
        
        brand_collection.update_one(
            {"_id": request.state.brand["_id"]},
            {"$set": {"FAQList": faq_list}}
        )

        return {
            "message": "FAQ deleted successfully"
        }
    except Exception as e:
        raise handle_exception(e)
    
@router.delete("/delete-all-faqs", dependencies=[Depends(authenticate_user)], status_code=status.HTTP_200_OK)
async def delete_all_faqs(request: Request):
    """
    Delete all FAQs

    Parameters:
    - request (Request): the request object

    Returns:
    - dict: the response message
    """
    try:
        brand_collection = request.app.brands_collection
        brand_collection.update_one(
            {"_id": request.state.brand["_id"]},
            {"$set": {"FAQList": []}}
        )

        return {
            "message": "All FAQs deleted successfully"
        }
    except Exception as e:
        raise handle_exception(e)
