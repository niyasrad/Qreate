import { motion } from "framer-motion";
import styled from "styled-components";

export const PopUpContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 998;
    padding: 1rem;
`

export const PopUpAnimator = styled(motion.div)`
    height: auto;
    width: auto;
    max-width: 95%;
`