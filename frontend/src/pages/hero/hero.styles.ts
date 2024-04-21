import styled from "styled-components";
import { bgSlide } from "../../components/appcover/appcover.styles";

export const HeroContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Playfair Display', serif;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e81f00' fill-opacity='0.16'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: ${bgSlide} 45s linear infinite;
`

export const HeroDesc = styled.div`
    min-height: 70%;
    width: 30rem;
    max-width: 80%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; 
    gap: 3rem;
`

export const HeroButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center; 
    gap: 2rem;
    flex-wrap: wrap;
`

export const HeroWorking = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeroBG = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    object-position: top;
`