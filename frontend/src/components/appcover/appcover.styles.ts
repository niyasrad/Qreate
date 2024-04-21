import styled, { keyframes } from "styled-components";

export const bgSlide = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
`

export const AppcoverContainer = styled.div`
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e81f00' fill-opacity='0.16'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: ${bgSlide} 45s linear infinite;
    width: 100%;
    min-height: 100%;
    max-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`

export const AppcoverDisplay = styled.div`
    height: 100%;
    overflow: scroll;
`