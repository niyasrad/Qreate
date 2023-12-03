import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroCarouselContainer = styled.div`
    position: absolute;
    top: 3rem;
    width: 40rem;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: white;
    box-shadow: 0px 4px 12.8px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #000;
    border-radius: 2rem;

    @media only screen and (max-width: 990px) {
        max-width: 90%;
    }
`

export const HeroCarouselContent = styled.div`
    display: flex;
    margin: auto;
    height: 20rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 60%;
    gap: 1rem;

    @media only screen and (max-width: 990px) {
        max-width: 80%;
        height: 25rem;
    }
`

export const HeroCarouselEntries = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroCarouselSwitch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const HeroSwitchButton = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    cursor: pointer;
`