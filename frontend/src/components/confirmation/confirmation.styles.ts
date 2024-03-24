import styled from "styled-components";

export const ConfirmationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3rem;
    background-color: #000000;
    box-shadow: inset 0 0 20px rgba(100, 100, 100, 0.8);
    border-radius: 1rem;
    padding: 2rem;
    box-sizing: border-box;

    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
    }
`

export const ConfirmationElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 14rem;
`

export const ConfirmationButtons = styled.div`
    height: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media only screen and (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`