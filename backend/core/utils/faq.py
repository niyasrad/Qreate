from typing import List

from core.schema.faq import FAQItem

def order_check(faq_list: List[FAQItem], faq: FAQItem):
    """
    Check the order of the FAQ
    
    Parameters:
    - faq_list (List[FAQItem]): the list of FAQs
    - faq (FAQItem): the FAQ item
    
    Returns:
    - True: if the order is valid
    - False: if the order is invalid
    """
    if faq["order"] > len(faq_list)+1:
        return False
    
    return True 

def order_change(faq_list: List[FAQItem], faq: dict, action: str):
    """
    Change the order of the FAQ
    
    Parameters:
    - faq_list (List[FAQItem]): the list of FAQs
    - faq (FAQItem): the FAQ item
    """
    if action == "add":
        for item in faq_list:
            if item["order"] >= faq["order"]:
                item["order"] += 1
        return faq_list

    if action == "update":
        for item in faq_list:
            if str(item["faq_id"]) == faq["faq_id"]: 
                item["question"] = faq["question"]
                item["answer"] = faq["answer"]
                if item["order"] < faq["order"]:
                    for item_itr in faq_list:
                        if item_itr["order"] <= faq["order"] and str(item_itr["faq_id"]) != faq["faq_id"]:
                            item_itr["order"] -= 1
                else:
                    for item_itr in faq_list:
                        if item_itr["order"] >= faq["order"] and str(item_itr["faq_id"]) != faq["faq_id"]:
                            item_itr["order"] += 1
                item["order"] = faq["order"]
                return faq_list

    if action == "delete":
        for item in faq_list:
            if item["order"] > faq["order"]:
                item["order"] -= 1
        return faq_list
    