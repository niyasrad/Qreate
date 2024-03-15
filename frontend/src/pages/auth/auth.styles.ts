import styled from "styled-components"

export const AuthContainer = styled.div`
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const AuthContent = styled.div`
    max-width: 95%;
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
`

export const AuthHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`

export const AuthTitle = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: #FF0000;
`

export const AuthSub = styled.p`
    font-size: 1.6rem;
    color: #FFFFFF;
`

export const AuthForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
`

export const AuthLabel = styled.p`
    font-size: 1rem;
    color: #A0A0A0;
    user-select: none;
`

export const AuthInput = styled.input`
    width: 100%;
    padding: 0.6rem 1.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #1A1A1A;
    color: #FFFFFF;
    transition: 0.3s ease;
    user-select: none;
    cursor: pointer;

    &:focus {
        outline: none;
        background-color: #2A2A2A;
    }
`

export const AuthButton = styled.button`
    width: 100%;
    padding: 0.6rem 1.5rem;
    font-size: 1.4rem;
    border: none;
    color: #FFFFFF;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    background-color: #1C1A1B;
    border-radius: 0.5rem;
    box-shadow: inset 0 0 15px rgba(100, 100, 100, 0.8);

    &:hover {
        box-shadow: inset 0 0 15px rgba(255, 255, 255, 1);
    }
`

export const AuthFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

export const AuthSwitch = styled.p`
    font-size: 1.1rem;
    color: #FFFFFF;
    transition: 0.3s ease;
    user-select: none;
    cursor: pointer;

    a {
        color: #FF0000;
        user-select: none;
        cursor: pointer;
        text-decoration: underline;
    }
`