import styled from "styled-components";

export const FAQContainer = styled.div<{ background?: string }>`
    width: 100%;
    min-height: 100%;
    background-color: ${props => props.background ? props.background : 'black'};
    font-family: 'Playfair Display', sans-serif;
    padding-bottom: 5rem;
`

export const FAQContent = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
    max-width: 50rem;
`

export const FAQBrand = styled.div`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const FAQBrandIcon = styled.img`
    width: 8rem;
    background-color: white;
    border-radius: 2rem;
    object-fit: contain;
    height: 8rem;
    max-width: 40%;
`

export const FAQBrandDetails = styled.div`
    width: auto;
    max-width: 28rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
`

export const FAQBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
`

export const FAQEntries = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const FAQEntry = styled.div`
    display: flex;
    flex-direction: column;
`

