from pydantic import BaseModel, Field
from typing import Optional
from uuid import UUID, uuid4

class FAQItem(BaseModel):
    """
    FAQItem: A class to represent the FAQItem model

    Attributes:
    - faq_id (UUID): the FAQ ID
    - question (str): the question
    - answer (str): the answer 
    - order (int): the order of the FAQ  
    """
    faq_id: Optional[UUID] = Field(default = uuid4(), example = "1")
    question: str = Field(example = "How to return a product?")
    answer: str = Field(example = "You can return a product by visiting the nearest store")
    order: int = Field(example = 1, min = 1)

class FAQDetails(BaseModel):
    """
    FAQDetails: A class to represent the details of a FAQ

    Attributes:
    - faq_id (str): the FAQ ID
    - question (str): the question
    - answer (str): the answer 
    - order (int): the order of the FAQ  
    """
    faq_id: str = Field(example = "1")
    question: str = Field(example = "How to return a product?")
    answer: str = Field(example = "You can return a product by visiting the nearest store")
    order: int = Field(example = 1, min = 1)

class FAQUpdate(BaseModel):
    """
    FAQUpdate: A class to represent the details of a FAQ update

    Attributes:
    - faq_id (str): the FAQ ID
    - question (str): the question
    - answer (str): the answer 
    """
    faq_id: str = Field(example = "1")
    question: str = Field(example = "How to return a product?")
    answer: str = Field(example = "You can return a product by visiting the nearest store")