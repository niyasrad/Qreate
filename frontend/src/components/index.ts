import styled from 'styled-components'

export interface TextProps {
    left?: boolean, 
    right?: boolean,
    small?: boolean,
    color?: string
    justify?: boolean
}

export const QreateTitle = styled.h1<TextProps>`
    font-size: ${props => props.small ? '1.5em' : '2.2em'};
    font-weight: 900;
    text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
    color: ${props => props.color ? props.color : 'black'};
    user-select: none;
`

export const QreateSubtitle = styled.p<TextProps>`
    font-size: ${props => props.small ? '1.1em' : '1.4em'};
    text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
    color: ${props => props.color ? props.color : 'black'};
    user-select: none;
    letter-spacing: 0.04em;
    font-weight: 600;
`

export const QreateText = styled.p<TextProps>`
    font-size: ${props => props.small ? '0.9em' : '1.1em'};
    letter-spacing: 0.03em;
    font-weight: 400;
    text-align: ${props => props.justify ? 'justify' : props.left ? 'left' : props.right ? 'right' : 'center'};
    color: ${props => props.color ? props.color : 'black'};
    user-select: none;
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