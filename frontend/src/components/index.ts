import { Bars3, Camera, Check, Cog, Trash, XMark } from '@styled-icons/heroicons-solid'
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
    letter-spacing: -0.03em;
    text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
    color: ${props => props.color ? props.color : 'black'};
    user-select: none;
`

export const QreateSubtitle = styled.p<TextProps>`
    font-size: ${props => props.small ? '1.1em' : '1.4em'};
    text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
    color: ${props => props.color ? props.color : 'black'};
    user-select: none;
    letter-spacing: -0.02em;
    font-weight: 600;
`

export const QreateText = styled.p<TextProps>`
    font-size: ${props => props.small ? '0.9em' : '1.1em'};
    letter-spacing: 0.01em;
    font-weight: 400;
    text-align: ${props => props.justify ? 'justify' : props.left ? 'left' : props.right ? 'right' : 'center'};
    color: ${props => props.color ? props.color : 'black'};
    user-select: none;
`

export const QreateButton = styled.button<{ primary?: boolean }>`
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 600;
    width: 13rem;
    max-width: 100%;
    padding: 1rem 0.5rem;
    border: ${props => props.primary ? '0.2rem solid white' : '0.2rem solid black'};
    color: ${props => props.primary ? 'white' : 'black'};
    background-color: ${props => props.primary ? 'black' : 'white'};
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.primary ? 'white' : 'black'};
        color: ${props => props.primary ? 'black' : 'white'};
        border: ${props => props.primary ? '0.2rem solid black' : '0.2rem solid white'};
    }
`

export const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    max-width: 50rem;
`

export const AppTitle = styled.p`
    align-items: center;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 2.4rem;
    user-select: none;
    margin-bottom: 0.5rem;

    span {
        font-size: 1.8rem;
        color: #A0A0A0;
    }

    @media only screen and (max-width: 900px) {
        span {
            font-size: 1.6rem;
        }
        font-size: 1.8rem;
    }
`

export const AppDesc = styled.p`
    color: #FFFFFF;
    font-size: 1.1em;
    user-select: none;
    margin-bottom: 0.5rem;

    span {
        color: #FF0000;
    }

    @media only screen and (max-width: 900px) {
        font-size: 1rem;
    }
`

export const AppSBar = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AppSTitle = styled.p`
    align-items: center;
    color: #FF0000;
    font-weight: bold;
    font-size: 1.9rem;
    user-select: none;
    margin-bottom: 0.5rem;

    span {
        color: #FFFFFF;
    }

    @media only screen and (max-width: 900px) {
        font-size: 1.6rem;
    }
`

export const EditIcon = styled(Cog)`
    color: #FFFFFF;
    width: 100%;
    height: 100%;
`

export const DoneIcon = styled(Check)`
    stroke-width: 2rem;
    color: #00B548;
`

export const CancelIcon = styled(XMark)`
    stroke-width: 1rem;
    color: #FF0000;
`

export const DeleteIcon = styled(Trash)`
    color: #000000;
`

export const EditDragIcon = styled(Bars3)`
    width: 1.2rem;
    color: #FFFFFF;
`

export const CameraIcon = styled(Camera)`
    color: #A0A0A0;
`