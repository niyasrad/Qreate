from pydantic import BaseModel, Field
from typing import List, Optional
from core.schema.faq import FAQItem

class Brand(BaseModel):
    """
    Brand: A class to represent the Brand model
    
    Attributes:
    - brand_name (str): the brand name
    - brand_email (str): the brand email
    - brand_password (str): the brand password
    - brand_desc (str): the brand description
    - FAQList (List[FAQItem]): the list of FAQs
    - image_url (str): the image URL
    """
    brand_name: str = Field(example = "Qreate")
    brand_email: str = Field(example = "qreate@gmail.com")
    brand_password: str = Field(example = "password")
    brand_desc: Optional[str] = Field(default = None, example = "FAQ website for brands")
    FAQList: Optional[List[FAQItem]] = Field(default=[], example = [{"question": "How to return a product?", "answer": "You can return a product by visiting the nearest store"}])   
    image_url: Optional[str] = Field(default = None, example = "https://www.qreate.com/images/ecommerce/styles_new/160x160/161723A9L0G1000_001_medium.jpg")

class BrandDetails(BaseModel):
    """
    BrandDetails: A class to represent the details of a brand
    
    Attributes:
    - brand_name (str): the brand name
    - brand_desc (str): the brand description
    - brand_email (str): the brand email
    - image_url (str): the image URL
    """
    brand_name: str = Field(example = "Qreate")
    brand_desc: Optional[str] = Field(example = "FAQ website for brands")
    brand_email: str = Field(example = "qreate@gmail.com")
    image_url: Optional[str] = Field(default = None, example = "https://www.qreate.com/images/ecommerce/styles_new/160x160/161723A9L0G1000_001_medium.jpg")

class BrandAuth(BaseModel):
    """
    BrandAuth: A class to represent the authentication of a brand for registration
    
    Attributes:
    - brand_name (str): the brand name
    - brand_password (str): the brand password
    - brand_email (str): the brand email
    """
    brand_name: str = Field(example = "Qreate")
    brand_email: str = Field(example = "qreate@gmail.com")
    brand_password: str = Field(example = "password")

class BrandLogin(BaseModel):
    """
    BrandLogin: A class to represent the login of a brand
    
    Attributes:
    - brand_email (str): the brand email
    - brand_password (str): the brand password
    """
    brand_email: str = Field(example = "qreate@gmail.com")
    brand_password: str = Field(example = "password")

