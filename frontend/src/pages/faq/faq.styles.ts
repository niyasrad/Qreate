import styled from "styled-components";
import { bgSlide } from "../../components/appcover/appcover.styles";

export const FAQContainer = styled.div<{ background?: string }>`
    width: 100%;
    min-height: 100%;
    background-color: ${props => props.background ? props.background : 'black'};
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e81f00' fill-opacity='0.16'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: ${bgSlide} 45s linear infinite;
    font-family: 'Playfair Display', sans-serif;
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
    object-fit: cover;
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

