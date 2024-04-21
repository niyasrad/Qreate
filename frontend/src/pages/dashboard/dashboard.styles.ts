import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    padding-bottom: 5rem;
    box-sizing: border-box;

    @media (max-width: 990px) {
        height: auto;
    }
`

export const DashboardContent = styled.div`
    max-width: 90%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`

export const DashboardFront = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 20rem;

    img {
        width: 100%;
        height: auto;
    }
`

export const DashboardThread = styled.p`
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
`

export const DashboardThreadL = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: #FF0000;
`

export const DashboardThreadR = styled.p`
    font-size: 1.25rem;
    color: #FFFFFF;
    text-align: end;
`

export const DashboardSelector = styled.div`
    width: 30rem;
    display: grid;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(11rem,1fr));

    @media only screen and (max-width: 990px) {
        width: 100%;
    }
`