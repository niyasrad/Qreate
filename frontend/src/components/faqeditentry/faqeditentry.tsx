import React, { useState } from "react";
import { FAQCancelIcon, FAQDeleteIcon, FAQDoneIcon, FAQEditAnswer, FAQEditDrag, FAQEditDragIcon, FAQEditEntryAE, FAQEditEntryAnswer, FAQEditEntryContainer, FAQEditEntryQE, FAQEditEntryQuestion, FAQEditIcon, FAQEditQuestion, FAQIcon, FAQIcons } from "./faqeditentry.styles";

import { AnimatePresence, useDragControls, useMotionValue } from "framer-motion";
import { FAQEntryInterface } from "../../pages/editor/editor";
import { toast } from "react-toastify";
import axios from "axios";
import Confirmation, { ConfirmationEnum } from "../confirmation/confirmation";
import PopUp from "../popup/popup";

export interface FAQEditEntryProps {
    item: FAQEntryInterface,
    setFAQList: React.Dispatch<React.SetStateAction<FAQEntryInterface[]>>
}


export default function FAQEditEntry({ item, setFAQList }: FAQEditEntryProps ) {

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [question, setQuestion] = useState<string>(item.question)
    const [answer, setAnswer] = useState<string>(item.answer)

    const [isDeleting, setIsDeleting] = useState<boolean>(false)

    const handleClick = () => {
        setIsEditing(!isEditing)
    }

    const handleQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(event.target.value)
    }

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(event.target.value)
    }

    const handleCancel = () => {
        setQuestion(item.question)
        setAnswer(item.answer)
        setIsEditing(false)
    }

    const handleDone = () => {
        if (question === "" || answer === "") {
            toast.error("Question and Answer cannot be empty!")
            return
        }
        if (question === item.question && answer === item.answer) {
            setIsEditing(false)
            return
        }
        axios.put(import.meta.env.VITE_BASE_API + '/faq/update-faq-qa', {
            faq_id: item.faq_id,
            question: question,
            answer: answer,
        })
        .then(() => {
            toast.success("FAQ Updated Successfully!")
            setFAQList(prev => {
                return prev.map(entry => {
                    if (entry.faq_id === item.faq_id) {
                        return {
                            ...entry,
                            question: question,
                            answer: answer
                        }
                    }
                    return entry
                })
            })
            setIsEditing(false)
        })
        .catch(() => {
            toast.error("An error occurred while updating FAQ!")
        })
    }

    const handleDelete = () => {
        axios.delete(import.meta.env.VITE_BASE_API + '/faq/delete-faq', {
            params: {
                faq_id: item.faq_id
            }
        })
        .then(() => {
            setIsDeleting(false)
            toast.success("FAQ Deleted Successfully!")
            setFAQList(prev => {
                return prev.filter(entry => entry.faq_id !== item.faq_id)
            })
        })
        .catch(() => {
            toast.error("An error occurred while deleting FAQ!")
        })
    }

    const y = useMotionValue(0)
    const dragControls = useDragControls()


    return (
        <FAQEditEntryContainer
            value={item}
            id={item.faq_id}
            style={{ y, touchAction: 'pan-x' }}
            dragListener={false}
            dragControls={dragControls}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <FAQEditEntryQuestion>
                <FAQEditDrag 
                    onPointerDown={(event) => {
                        event.preventDefault()
                        handleCancel()
                        dragControls.start(event)
                    }}
                >
                    <FAQEditDragIcon />
                </FAQEditDrag>
                <FAQEditEntryQE>
                    <FAQEditQuestion
                        value={question}
                        onChange={handleQuestionChange}
                        disabled={!isEditing}
                        placeholder="Did you just clear the entire question?"
                    />
                </FAQEditEntryQE>
                <FAQIcons>  
                {
                    !isEditing ? 
                    <FAQIcon $transform="rotate" onClick={handleClick} >
                        <FAQEditIcon />
                    </FAQIcon>
                    :
                    <>
                        <FAQIcon $color="red" onClick={() => setIsDeleting(true)}>
                            <FAQDeleteIcon />
                        </FAQIcon>
                        <FAQIcon $color="white" onClick={handleCancel}>
                            <FAQCancelIcon />
                        </FAQIcon>
                        <FAQIcon $color="white" onClick={handleDone}>
                            <FAQDoneIcon />
                        </FAQIcon>
                    </>
                }
                </FAQIcons>
            </FAQEditEntryQuestion>
            <AnimatePresence>
                {
                    isEditing &&
                    <FAQEditEntryAnswer
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0, padding: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FAQEditEntryAE>
                            <FAQEditAnswer
                                value={answer}
                                onChange={handleAnswerChange}
                                disabled={!isEditing}
                                placeholder="There is no question without an answer. Let your creativity flow!"
                            />
                        </FAQEditEntryAE>
                    </FAQEditEntryAnswer>
                }
            </AnimatePresence>
            <PopUp 
                condition={isDeleting}
                onCancel={() => setIsDeleting(false)}
            >
                <Confirmation 
                    title="Delete FAQ"
                    message="Are you sure you want to delete this FAQ?"
                    confirmation={ConfirmationEnum.DELETE}
                    onDone={handleDelete}
                    onCancel={() => setIsDeleting(false)}
                />
            </PopUp>
        </FAQEditEntryContainer>
    )
}