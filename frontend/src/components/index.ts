import styled from 'styled-components'

export const QreateTitle = styled.h1<{ left?: boolean, right?: boolean }>`
    font-size: 2.5rem;
    margin: 0.5rem auto;
    font-weight: 900;
    text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
    color: black;
`

export const QreateSubtitle = styled.h2<{ left?: boolean, right?: boolean }>`
    font-size: 1.5rem;
    margin: 0.5rem auto;
    text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
    color: black;
`

export const QreateText = styled.p<{ left?: boolean, right?: boolean }>`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0.5rem auto;
    text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
    color: black;
`

export const QreateButton = styled.button<{ primary?: boolean, secondary?: boolean }>`
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 600;
    width: 13rem;
    max-width: 100%;
    padding: 1rem 0.5rem;
    border: ${props => props.primary ? '0.2rem solid white' : props.secondary ? '0.2rem solid black' : '0.2rem solid black'};
    color: ${props => props.primary ? 'white' : props.secondary ? 'black' : 'black'};
    background-color: ${props => props.primary ? 'black' : props.secondary ? 'white' : 'white'};
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.primary ? 'white' : props.secondary ? 'black' : 'black'};
        color: ${props => props.primary ? 'black' : props.secondary ? 'white' : 'white'};
        border: ${props => props.primary ? '0.2rem solid black' : props.secondary ? '0.2rem solid white' : '0.2rem solid white'};
    }
`