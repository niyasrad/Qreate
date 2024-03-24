import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../navbar/navbar";
import { AppcoverContainer, AppcoverDisplay } from "./appcover.styles";
import Loading from "../loading/loading";

import { useGlobalContext } from "../../contexts/global.context";
import { LoadingContainer } from "../loading/loading.styles";


export default function Appcover({ children }: { children: React.ReactNode }) {

    const { isLoggedIn, isLoading, handleSignOut } = useGlobalContext()

    const [isDone, setIsDone] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        /*

        UseEffect Function to check if user is logged in

        @return void
        */

        if (!isLoggedIn && !isLoading) {
            handleSignOut!()
            navigate('/sign-in')
        }
        if (isLoggedIn && !isLoading) {
            setTimeout(() => {
                setIsDone(true)
            }, 2000)
        }
    }, [isLoggedIn, isLoading])
    

    if (isLoading || !isLoggedIn || !isDone) return (
        <LoadingContainer>
            <Loading />
        </LoadingContainer>
    )

    return (
        <AppcoverContainer>
            <Navbar></Navbar>
            <AppcoverDisplay>
                {children}
            </AppcoverDisplay>
        </AppcoverContainer>
    )

}