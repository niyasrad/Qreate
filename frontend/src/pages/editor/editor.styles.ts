import { Plus } from "@styled-icons/heroicons-solid";
import { Reorder, motion } from "framer-motion";
import styled from "styled-components";

export const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    gap: 2rem;
    padding-bottom: 5rem;
    box-sizing: border-box;
`

export const EditorAdd = styled(Plus)<{ $size: string }>`
    width: ${ props => props.$size === "large" ? "2.8rem" : "2.2rem"};
    stroke: #FFFFFF;
    stroke-width: 0.1rem;
    transition: all 0.1s ease-in-out;
    color: #000000;
    cursor: pointer;

    &:hover {
        stroke: #FF0000;
    }
    @media only screen and (max-width: 900px) {
        width: ${ props => props.$size === "large" ? "2.2rem" : "2.0rem"};
    }
`

export const EditorBox = styled(Reorder.Group)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    box-sizing: border-box;
    background-color: #000000;
    box-shadow: inset 0 0 20px rgba(100, 100, 100, 0.8);
    border-radius: 1rem;
    overflow: hidden;

    @media only screen and (max-width: 900px) {
        padding: 1rem;
    }
`

export const EditorBoxD = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
    padding: 3rem 4rem;
    box-sizing: border-box;
    background-color: #000000;
    box-shadow: inset 0 0 20px rgba(100, 100, 100, 0.8);
    border-radius: 1rem;
    overflow: hidden;

    @media only screen and (max-width: 900px) {
        padding: 2rem;
        flex-direction: column;
    }
`

export const EditorBoxDElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
`

export const EditorBoxDTitle = styled.p`
    color: #FFFFFF;
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
`

export const EditorBoxDDesc = styled.p`
    color: #A0A0A0;
    font-size: 1em;
    user-select: none;
`

export const EditorBoxDSwitch = styled(motion.div)`
    width: 4rem;
    height: 2rem;
    transition: 0.2s all ease-in-out;
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
`

export const EditorBoxDSwitchButton = styled(motion.div)`
    width: 2rem;
    height: 2rem;
    background-color: #000000;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    cursor: pointer;
`

export const EditorBoxDEditor = styled.div`
    color: #A0A0A0;
    user-select: none;
    display: grid;
    grid-template-columns: 1fr 6rem;
    align-items: center;
    gap: 0.5rem;
    background-color: #151314;
    border-radius: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;

    input {
        background-color: #151314;
        color: #FFFFFF;
        border: none;
        font-size: 1em;
        outline: none;
        width: 100%;
    }
`

export const EditorBoxDLeft = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
`

export const EditorBoxDRight = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
`

