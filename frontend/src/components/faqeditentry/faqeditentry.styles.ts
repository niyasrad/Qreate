import { Bars3, Check, Cog, Trash, XMark } from "@styled-icons/heroicons-solid";
import { Reorder, motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export const FAQEditEntryContainer = styled(Reorder.Item)`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 0.5px solid #FFFFFF;
`

export const FAQEditEntryQuestion = styled.div`
    display: grid;
    padding: 1rem 0;
    grid-template-columns: 3rem 1fr auto;
    width: 100%;
    min-height: 4rem;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
        user-select: none;
        align-self: center;
        justify-self: end;
    }
`

export const FAQEditEntryQE = styled.div`
    align-self: center;
`

export const FAQEditQA = styled(TextareaAutosize)`
    resize: none; 
    overflow: hidden;
    width: 100%;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    text-align: left;
    letter-spacing: -0.02em;
    user-select: none;

    &:focus {
        outline: none;
    }
`

export const FAQEditQuestion = styled(FAQEditQA)`
    padding-right: 1.5rem;
    box-sizing: border-box;
    font-size: 1.2em;
    font-weight: 600;
`

export const FAQEditAnswer = styled(FAQEditQA)`
    padding-left: 2.3rem;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: 400;
`

export const FAQEditEntryAE = styled.div`
    padding: 1rem 0.5rem;
    padding-top: 0;
`

export const FAQEditEntryAnswer = styled(motion.div)`
    width: 100%;
`

export const FAQIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`

export const FAQIcon = styled.div<{ $transform?: string, $color?: string }>`
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ props => props.$color ? props.$color : "#1C1A1B"};
    transition: all 0.3s ease-in-out;
    padding: ${ props => props.$transform === "rotate" ? "0.5rem" : "0.7rem"};
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        transform: ${ props => props.$transform === "rotate" ? "rotate(360deg)" : "none" };
    }
`

export const FAQEditIcon = styled(Cog)`
    color: #FFFFFF;
    width: 100%;
    height: 100%;
`

export const FAQDoneIcon = styled(Check)`
    stroke-width: 2rem;
    color: #00B548;
`

export const FAQCancelIcon = styled(XMark)`
    stroke-width: 1rem;
    color: #FF0000;
`

export const FAQDeleteIcon = styled(Trash)`
    color: #000000;
`

export const FAQEditDrag = styled.div`
    width: 100%;
    height: 100%;
    cursor: grab;
    display: flex;
    align-items: center;
`

export const FAQEditDragIcon = styled(Bars3)`
    width: 1.2rem;
    color: #FFFFFF;
`