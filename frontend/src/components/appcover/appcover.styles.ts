import styled from "styled-components";

export const AppcoverContainer = styled.div`
    background-color: #000000;
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr 8fr;

    @media only screen and (max-width: 900px) {
        grid-template-rows: 1fr 11fr;
    }
`

export const AppcoverDisplay = styled.div`
    height: 100%;
    scroll-behavior: auto;
`