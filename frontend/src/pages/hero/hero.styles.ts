import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    min-height: 100%;
    font-family: 'Playfair Display', serif;
`

export const HeroDesc = styled.div`
    min-height: 70%;
    width: 40rem;
    max-width: 80%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; 
    gap: 2rem;
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