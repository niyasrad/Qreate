import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../navbar/navbar";
import { AppcoverContainer, AppcoverDisplay } from "./appcover.styles";
import Loading from "../loading/loading";

import { useGlobalContext } from "../../contexts/global.context";


export default function Appcover({ children }: { children: React.ReactNode }) {

    const { isLoggedIn, isLoading, handleSignOut } = useGlobalContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn && !isLoading) {
            handleSignOut!()
            navigate('/sign-in')
        }
    }, [isLoggedIn, isLoading])
    

    if (isLoading || !isLoggedIn) return <Loading />

    return (
        <AppcoverContainer>
            <Navbar></Navbar>
            <AppcoverDisplay>
                {children}
            </AppcoverDisplay>
        </AppcoverContainer>
    )

}