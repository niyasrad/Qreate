import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface GlobalContextInterface {
    brandName: string,
    brandEmail: string,
    brandID: string,
    customURL: string,
    isLoading: boolean,
    isLoggedIn: boolean,
    setBrandName?: Dispatch<SetStateAction<string>>,
    setBrandEmail?: Dispatch<SetStateAction<string>>,
    setBrandID?: Dispatch<SetStateAction<string>>,
    setCustomURL?: Dispatch<SetStateAction<string>>,
    setIsLoading?: Dispatch<SetStateAction<boolean>>,
    setIsLoggedIn?: Dispatch<SetStateAction<boolean>> 
    handleLogIn?: (token: string, brand: GlobalContextInterface) => void,
    handleSignOut?: () => void
}

export const GlobalContextDefault: GlobalContextInterface = {
    brandName: '',
    brandEmail: '',
    brandID: '',
    customURL: '',
    isLoading: true,
    isLoggedIn: false
}

export const GlobalContext = createContext<GlobalContextInterface>(GlobalContextDefault)

export const useGlobalContext = () => useContext(GlobalContext)