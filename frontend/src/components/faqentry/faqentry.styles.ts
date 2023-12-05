import { motion } from "framer-motion";
import styled from "styled-components";

export const FAQEntryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 0.5px solid #000;

    .faq-entry-question:hover{
        background-color: #f5f5f5; 
    }
`

export const FAQEntryQuestion = styled.div`
    display: grid;
    padding: 1rem 0.5rem;
    grid-template-columns: 1fr 5rem;
    width: 100%;
    height: auto;
    cursor: pointer;

    img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
        user-select: none;
        align-self: center;
        justify-self: end;
    }
`

export const FAQEntryQE = styled.div`
    align-self: center;
`

export const FAQEntryAE = styled.div`
    padding: 2rem 0;
`

export const FAQEntryAnswer = styled(motion.div)`
    width: 100%;
`
