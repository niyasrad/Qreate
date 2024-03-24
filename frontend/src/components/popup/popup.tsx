import { AnimatePresence } from "framer-motion"
import { PopUpAnimator, PopUpContainer } from "./popup.styles"

export interface PopUpProps {
    condition: boolean,
    onCancel: () => void,
    children: React.ReactNode
}

export default function PopUp({ condition, onCancel, children }: PopUpProps) {
    return (
        <AnimatePresence>
            { condition &&
                <PopUpContainer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onCancel}
                >
                    <PopUpAnimator
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {children}
                    </PopUpAnimator>
                </PopUpContainer>
            }
        </AnimatePresence>
    )
}