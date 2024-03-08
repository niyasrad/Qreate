import styled from "styled-components";

export const SelectorcardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    min-height: 11rem;
    width: 100%;

    padding: 1rem;
    box-sizing: border-box;

    background-color: #1C1A1B;
    border-radius: 1.5rem;
    box-shadow: inset 0 0 15px rgba(100, 100, 100, 0.8);
    transition: all 0.1s;

    &:hover {
        box-shadow: inset 0 0 15px rgba(255, 255, 255, 1);
    }
`   

export const SelectorcardTitle = styled.p`
    font-size: 1.5rem;
    color: #FFFFFF;
    text-align: center;
    margin: 0;
    padding: 0.5rem 0;
    box-sizing: border-box;

    user-select: none;

    span {
        color: #A0A0A0;
    }
`

export const SelectorcardDescription = styled.p`
    font-size: 1rem;
    color: #FFFFFF;
    text-align: center;
    margin: 0;
    user-select: none;
    max-width: 11rem;
`

