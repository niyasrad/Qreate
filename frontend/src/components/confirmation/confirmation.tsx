import { CancelIcon, DeleteIcon, DoneIcon, QreateSubtitle } from ".."
import { FAQIcon } from "../faqeditentry/faqeditentry.styles"
import { ConfirmationButtons, ConfirmationContainer, ConfirmationElement } from "./confirmation.styles"

export enum ConfirmationEnum {
    DELETE,
    DONE
}

export interface ConfirmationProps {
    title: string,
    message: string,
    confirmation: ConfirmationEnum,
    onDone: () => void,
    onCancel: () => void
}


export default function Confirmation({ title, message, confirmation, onDone, onCancel }: ConfirmationProps){
    return (
        <ConfirmationContainer>
            <ConfirmationElement>
                <QreateSubtitle left color="white">{title}</QreateSubtitle>
                <QreateSubtitle left small color="grey">{message}</QreateSubtitle>
            </ConfirmationElement>
            <ConfirmationElement>
                <ConfirmationButtons>
                    <FAQIcon $color="white" onClick={onCancel}>
                        <CancelIcon />
                    </FAQIcon>
                    <FAQIcon $color="red" onClick={onDone}>
                        {confirmation === ConfirmationEnum.DELETE ? <DeleteIcon /> : <DoneIcon />}
                    </FAQIcon>  
                </ConfirmationButtons>
            </ConfirmationElement>
        </ConfirmationContainer>
    )
}