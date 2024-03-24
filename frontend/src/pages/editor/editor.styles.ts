import { Plus } from "@styled-icons/heroicons-solid";
import { Reorder } from "framer-motion";
import styled from "styled-components";

export const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: auto;
    height: 100%;
`

export const EditorContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    max-width: 50rem;
`

export const EditorTitle = styled.p`
    align-items: center;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 2.4rem;
    user-select: none;
    margin-bottom: 0.5rem;

    span {
        font-size: 1.8rem;
        color: #A0A0A0;
    }

    @media only screen and (max-width: 900px) {
        span {
            font-size: 1.6rem;
        }
        font-size: 1.8rem;
    }
`

export const EditorSBar = styled.div`
    display: flex;
    justify-content: space-between;
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

export const EditorSTitle = styled.p`
    align-items: center;
    color: #FF0000;
    font-weight: bold;
    font-size: 1.9rem;
    user-select: none;
    margin-bottom: 0.5rem;

    span {
        color: #FFFFFF;
    }

    @media only screen and (max-width: 900px) {
        font-size: 1.6rem;
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