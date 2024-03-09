import styled from "styled-components";
import { ArrowLeftOnRectangle, Bars3BottomRight, XCircle } from "@styled-icons/heroicons-solid"

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    box-sizing: border-box;
`

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding: 0.8rem 3rem;
    box-sizing: border-box;
    background-color: #1C1A1B;
    box-shadow: inset 0 0 15px rgba(50, 50, 50, 0.8);
    border-radius: 1rem;

    @media only screen and (max-width: 1368px) {
        width: 90%;
    }

    @media only screen and (max-width: 900px) {
        width: 95%;
        justify-content: center;
        padding: 0.6rem 1.5rem;
    }
`

export const NavbarLogo = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: #FFFFFF;
    transition: 0.3s ease;
    user-select: none;
    cursor: pointer;
    margin-bottom: 0.5rem;

    &:hover {
        color: #FF0000;
    }
`

export const NavbarItems = styled.div`
    display: flex;
    gap: 2rem;
    box-sizing: border-box;
    align-items: center;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`

export const NavbarItem = styled.div<{ active?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: ${props => props.active ? '#FF0000' : '#FFFFFF'};
    font-weight: bold;
    transition: 0.3s ease;
    font-size: 1.4rem;
    user-select: none;
    margin-bottom: 0.5rem;
    cursor: pointer;

    span {
        font-size: 1.1rem;
        color: ${props => props.active ? '#FFFFFF' : '#A0A0A0'};
    }
    img {
        color: red;
    }
    &:hover {
        color: #A0A0A0;
        span {
            color: #FFFFFF;
        }
        svg {
            color: #FFFFFF;
        }
    }

    @media only screen and (max-width: 900px) {
        width: 90%;
        text-align: center;
        justify-content: center;
        padding: 1rem 0;
        border-radius: 1rem;
        background-color: ${props => props.active ? '#1C1A1B' : '#000000'};
        box-shadow: inset 0 0 10px rgba(250, 250, 250, 0.8);

        &:hover {
            color: #FF0000;
            background-color: #1C1A1B;
        }
    }
`

export const NavbarSignout = styled(ArrowLeftOnRectangle)`
    width: 2rem;
    height: 2rem;
    color: #FF0000;
    cursor: pointer;
    transition: 0.3s ease;
`

export const NavbarMobileLayer = styled.div<{ toggled ?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.2);
    z-index: 999;
    transition: all 0.3s ease-in-out;
    display: ${props => props.toggled ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`

export const NavbarMobile = styled.div<{ toggled ?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;

    padding: 2rem 1.5rem;

    background-color: #1C1A1B;
    box-shadow: inset 0 0 15px rgba(50, 50, 50, 0.8);

    display: none;
    flex-direction: column;
    
    gap: 3rem;
    transition: all 0.3s ease-in-out;
    transform: ${props => props.toggled ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 1000;

    @media only screen and (max-width: 900px) {
        display: flex;
    }
`

export const NavbarMobileItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const NavbarTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const NavbarToggleOpen = styled(Bars3BottomRight)`
    width: 2rem;
    height: 2rem;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.3s ease;

    display: none;

    @media only screen and (max-width: 900px) {
        display: block;
    }
`

export const NavbarToggleClose = styled(XCircle)`
    width: 3rem;
    height: 3rem;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.3s ease;
    display: none;

    @media only screen and (max-width: 900px) {
        display: block;
    }
`

export const NavbarDesc = styled.div`
    max-width: 90%;
    color: #FFFFFF;
`