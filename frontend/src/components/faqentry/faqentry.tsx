import { useState } from "react";
import { QreateSubtitle, QreateText } from "..";
import { FAQEntryAE, FAQEntryAnswer, FAQEntryContainer, FAQEntryQE, FAQEntryQuestion } from "./faqentry.styles";

import question_svg from '../../assets/faq/question.svg';
import answer_svg from '../../assets/faq/answer.svg';

import { AnimatePresence } from "framer-motion";

export interface FAQEntryProps {
    faq_id: string,
    question: string,
    answer: string
}

export default function FAQEntry({ question, answer }: FAQEntryProps) {

    const [active, setActive] = useState<boolean>(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <FAQEntryContainer>
            <FAQEntryQuestion
                className="faq-entry-question"
                onClick={handleClick}
            >
                <FAQEntryQE>
                    <QreateSubtitle left small>{question}</QreateSubtitle>
                </FAQEntryQE>
                <img 
                    src={active ? question_svg: answer_svg}
                    alt="Expand/Close"
                />
            </FAQEntryQuestion>
            <AnimatePresence>
                {
                    active &&
                    <FAQEntryAnswer
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0, padding: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FAQEntryAE>
                            <QreateText left small justify>{answer}</QreateText>
                        </FAQEntryAE>
                    </FAQEntryAnswer>
                }
            </AnimatePresence>
        </FAQEntryContainer>
    )
}