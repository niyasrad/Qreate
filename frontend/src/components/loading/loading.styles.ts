import styled, { keyframes } from "styled-components";

export const LoadingShine = keyframes`
    0% {
		background-position: -200px;
	}
	100% {
		background-position: 200px;
	}
`

export const LoadingContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`

export const LoadingContent = styled.p`
    background: #222 -webkit-gradient(linear, left top, right top, from(#000), to(#000), color-stop(0.1, #000)) 0 0 no-repeat;
	background-image: -webkit-linear-gradient(-40deg, transparent 0%, transparent 40%, #fff 50%, transparent 60%, transparent 100%);
	-webkit-background-size: 200px;
	color: transparent;
	-webkit-background-clip: text;
	-webkit-animation-name: ${LoadingShine};
	-webkit-animation-duration: 1s;
	-webkit-animation-iteration-count: infinite;
    font-size: 4em;
    font-weight: 900;
    user-select: none;
`