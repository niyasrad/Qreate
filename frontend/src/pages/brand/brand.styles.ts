import { motion } from "framer-motion";
import styled from "styled-components";

export const BrandContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: auto;
    padding-bottom: 5rem;
    box-sizing: border-box;
    height: 100%;
    gap: 2rem;
`

export const BrandContent = styled.div`
    box-sizing: border-box;
    background-color: #000000;
    box-shadow: inset 0 0 20px rgba(100, 100, 100, 0.8);
    border-radius: 1rem;
    overflow: hidden;
    min-height: 20rem;
    width: 100%;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BrandForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 3rem 4rem;
    gap: 3rem;

    @media only screen and (max-width: 600px) {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }
`

export const BrandLogoEditor = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    position: relative;
`

export const BrandLogoInput = styled.input`
    display: none;
`

export const BrandLogoPreview = styled.label`
    width: 100%;
    max-width: 15rem;
    aspect-ratio: 1;
    cursor: pointer;
    position: relative;
`

export const BrandLogoImage = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #FFFFFF;
    overflow: hidden;
    cursor: pointer;
    object-fit: cover;
`

export const BrandLogoEdit = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`


export const BrandLogoOptions = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    max-width: 15rem;
`

export const BrandLogoBtn = styled.div<{ color?:string, disabled?:boolean }>`
    border-radius: 0.5rem;
    cursor: pointer;
    width: 100%;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    background-color: ${ props => props.color ? props.color : "#FFFFFF" };
    color: #FFFFFF;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    box-shadow: ${props => props.disabled ? 'inset 0 0 20px rgba(255, 255, 255, 0.5)' : 'inset 0 0 20px rgba(100, 100, 100, 0.8)'};
    user-select: none;

    &:hover {
        background-color: ${ props => props.color ? "#FFFFFF" : "#000000" };
        color: #000000;
    }
`

export const BrandBoxTitle = styled.p`
    color: #FFFFFF;
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
`

export const BrandBoxDesc = styled.p`
    color: #A0A0A0;
    font-size: 1em;
    user-select: none;
`

export const BrandDetailsEditor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
`


export const BrandLabel = styled.p`
    font-size: 1rem;
    color: #FFFFFF;
    user-select: none;
`

export const BrandInput = styled.input`
    width: 100%;
    padding: 0.6rem 1rem;
    font-size: 1em;
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

export const BrandTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 0.6rem 1rem;
    font-size: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #1A1A1A;
    color: #FFFFFF;
    transition: 0.3s ease;
    user-select: none;
    cursor: pointer;
    resize: none;

    &:focus {
        outline: none;
        background-color: #2A2A2A;
    }
`

export const BrandDetailsOptions = styled.div`
    max-width: 100%;
    width: 20rem;
    display: flex;
    gap: 1rem;
    align-self: flex-end;
`