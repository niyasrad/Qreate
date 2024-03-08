import styled from "styled-components";

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
    justify-content: center;
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

    span:hover {
        color: #FFF;
    }

    &:hover {
        color: #A0A0A0;
    }
`