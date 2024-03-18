import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface GlobalContextInterface {
    brandName: string,
    brandEmail: string,
    isLoading: boolean,
    isLoggedIn: boolean,
    setBrandName?: Dispatch<SetStateAction<string>>,
    setBrandEmail?: Dispatch<SetStateAction<string>>,
    setIsLoading?: Dispatch<SetStateAction<boolean>>,
    setIsLoggedIn?: Dispatch<SetStateAction<boolean>> 
    handleLogIn?: (token: string, brand_name: string, brand_email: string) => void,
    handleSignOut?: () => void
}

export const GlobalContextDefault: GlobalContextInterface = {
    brandName: '',
    brandEmail: '',
    isLoading: true,
    isLoggedIn: false
}

export const GlobalContext = createContext<GlobalContextInterface>(GlobalContextDefault)

export const useGlobalContext = () => useContext(GlobalContext)