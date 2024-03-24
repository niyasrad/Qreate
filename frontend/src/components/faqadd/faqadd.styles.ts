import TextAreaAutoSize from "react-textarea-autosize";
import styled from "styled-components";

export const FAQAddContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #000000;
    box-shadow: inset 0 0 20px rgba(100, 100, 100, 0.8);
    border-radius: 1rem;
    padding: 2rem;
    box-sizing: border-box;

    width: 25rem;
    max-width: 100%;
`

export const FAQAddHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FAQAddBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

export const FAQAddQA = styled(TextAreaAutoSize)`
    width: 100%;
    background-color: #1C1A1B;
    color: #FFFFFF;
    border: none;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    font-size: 1em;
    resize: none;
`