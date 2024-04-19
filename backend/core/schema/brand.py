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
    - image_url (bool): presence of the image URL
    """
    brand_name: str = Field(example = "Qreate")
    brand_email: str = Field(example = "qreate@gmail.com")
    brand_password: str = Field(example = "password")
    brand_desc: Optional[str] = Field(default = None, example = "FAQ website for brands")
    FAQList: Optional[List[FAQItem]] = Field(default=[], example = [{"question": "How to return a product?", "answer": "You can return a product by visiting the nearest store"}])   
    image_url: bool = Field(default = False)
    custom_url: Optional[str] = Field(default = "", example = "qreate")

class BrandDetails(BaseModel):
    """
    BrandDetails: A class to represent the details of a brand
    
    Attributes:
    - brand_name (str): the brand name
    - brand_desc (str): the brand description
    - brand_email (str): the brand email
    - image_url (bool): presence of the image URL
    """
    brand_name: str = Field(example = "Qreate")
    brand_desc: Optional[str] = Field(example = "FAQ website for brands")
    brand_email: str = Field(example = "qreate@gmail.com")
    image_url: bool = Field(default = False)

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

class BrandProfile(BaseModel):
    """
    BrandProfile: A class to represent the profile of a brand
    
    Attributes:
    - brand_desc (str): the brand description
    """
    brand_desc: Optional[str] = Field(example = "FAQ website for brands", default= None) 
    brand_name: Optional[str] = Field(example = "FAQ website for brands", default= None) 
  
class BrandURL(BaseModel):
    """
    BrandURL: A class to represent the image URL of a brand
    
    Attributes:
    - image_url (str): the image URL
    """
    image_url: str = Field(example = "https://www.google.com")   

    