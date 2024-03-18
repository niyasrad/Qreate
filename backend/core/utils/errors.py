from fastapi import HTTPException, status

class APIError(HTTPException):
    """
    Custom error class for API errors
    
    Parameters:
    - status_code (int): the status code of the error
    - error_type (str): the type of the error
    - detail (str): the detail of the error
    """
    def __init__(self, status_code: int, error_type: str, detail: str):
        error_detail = {"type": error_type, "msg": detail}
        super().__init__(status_code=status_code, detail=[error_detail])

def handle_exception(
        e: Exception,
        status_code: int = status.HTTP_500_INTERNAL_SERVER_ERROR,
        error_type: str = "internal_error",
):
    """
    Handle exceptions

    Parameters:
    - e (Exception): the exception
    - status_code (int): the status code of the error
    - error_type (str): the type of the error

    Returns:
    - APIError: the API error
    """
    error_detail = f"Internal Server Error: {str(e)}"
    return APIError(status_code=status_code, error_type=error_type, detail=error_detail)

def unauthorized_error():
    """
    Create an unauthorized error
    
    Returns:
    - APIError: the unauthorized error
    """
    return APIError(
        status_code=status.HTTP_401_UNAUTHORIZED,
        error_type="unauthorized",
        detail=f"You are not authorized to access this resource",
    )

def not_found_error(field: str):
    """
    Create a not found error
    
    Parameters:
    - field (str): the field that is not found
    
    Returns:
    - APIError: the not found error
    """
    return APIError(
        status_code=status.HTTP_404_NOT_FOUND,
        error_type="not_found",
        detail=f"{field} is not found",
    )

def credential_error():
    """
    Create a credential error
    
    Returns:
    - APIError: the credential error
    """
    return APIError(
        status_code=status.HTTP_401_UNAUTHORIZED,
        error_type="credential_error",
        detail="Invalid credentials",
    )

def validation_error(field: str):
    """
    Create a validation error
    
    Parameters:
    - field (str): the field that is not valid
    
    Returns:
    - APIError: the validation error
    """
    return APIError(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        error_type="validation_error",
        detail=f"{field}",
    )

def conflict_error(field: str):
    """
    Create a conflict error
    
    Parameters:
    - field (str): the field that already exists
    
    Returns:
    - APIError: the conflict error
    """
    return APIError(
        status_code=status.HTTP_409_CONFLICT,
        error_type="conflict_error",
        detail=f"{field} already exists",
    )
