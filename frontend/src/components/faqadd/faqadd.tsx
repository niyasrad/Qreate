import { useState } from "react";
import { QreateSubtitle } from "..";
import { FAQCancelIcon, FAQDoneIcon, FAQIcon, FAQIcons } from "../faqeditentry/faqeditentry.styles";
import { FAQAddBody, FAQAddContainer, FAQAddHeader, FAQAddQA } from "./faqadd.styles";
import { toast } from "react-toastify";


export interface FAQAddProps {
    onCancel: () => void,
    onDone: (question: string, answer: string) => void
}


export default function FAQAdd({ onCancel, onDone }: FAQAddProps ) {

    const [question, setQuestion] = useState<string>("")
    const [answer, setAnswer] = useState<string>("")

    const handleDone = () => {
        /*
        Function to handle Done
        
        @return void
        
        */

        if (question === "" || answer === "") {
            toast.error("Question or Answer cannot be empty!")
            return
        }
        onDone(question, answer)
    }

    return (
        <FAQAddContainer>
            <FAQAddHeader>
                <QreateSubtitle left color="white">New FAQ</QreateSubtitle>
                <FAQIcons>
                    <FAQIcon $color="white" onClick={onCancel}>
                        <FAQCancelIcon />
                    </FAQIcon>
                    <FAQIcon $color="white" onClick={handleDone}>
                        <FAQDoneIcon />
                    </FAQIcon>
                </FAQIcons>
            </FAQAddHeader>
            <FAQAddBody>
                <FAQAddQA
                    placeholder="What is the meaning of life?"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                />
                <FAQAddQA
                    placeholder="The meaning of life is 42."
                    value={answer}
                    minRows={3}
                    onChange={(event) => setAnswer(event.target.value)}
                />
            </FAQAddBody>
        </FAQAddContainer>
    )
}