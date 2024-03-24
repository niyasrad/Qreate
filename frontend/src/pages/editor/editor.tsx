import { useEffect, useState } from "react";
import { EditorAdd, EditorBox, EditorContainer, EditorContent, EditorSBar, EditorSTitle, EditorTitle } from "./editor.styles";
import axios from "axios";
import FAQEditEntry from "../../components/faqeditentry/faqeditentry";
import FAQAdd from "../../components/faqadd/faqadd";
import PopUp from "../../components/popup/popup";
import { toast } from "react-toastify";
import { FAQIcon } from "../../components/faqeditentry/faqeditentry.styles";

export interface FAQEntryInterface {
    faq_id: string,
    question: string,
    answer: string,
    order: number
}

export default function Editor() {

    const [FAQList, setFAQList] = useState<FAQEntryInterface[]>([])

    const [isAdding, setIsAdding] = useState<boolean>(false)

    useEffect(() => {
        axios.get(import.meta.env.VITE_BASE_API + '/faq/get-faqs')
        .then((res) => {
            setFAQList(res.data.data.faq_list.sort((a: FAQEntryInterface, b: FAQEntryInterface) => a.order - b.order))
        })
    }, [])

    const handleReorder = (newOrder: FAQEntryInterface[]) => {
        const newFAQList = newOrder.map((entry, index) => {
            return {
                ...entry,
                order: index + 1
            }
        })

        setFAQList(newFAQList)
    }

    const handleAdd = (question: string, answer: string) => {
        axios.post(import.meta.env.VITE_BASE_API + '/faq/add-faq', {
            question: question,
            answer: answer,
            order: FAQList.length + 1
        })
        .then((res) => {
            setFAQList(prev => {
                return [
                    ...prev,
                    {
                        faq_id: res.data.faq.faq_id,
                        question: question,
                        answer: answer,
                        order: prev.length + 1
                    }
                ]
            })
            toast.success("FAQ Added Successfully!")
            setIsAdding(false)
        })
        .catch(() => {
            toast.error("An error occurred while adding FAQ!")
        })
    }

    return (
        <EditorContainer>
            <EditorContent>
                <EditorTitle>Q<span>Editor</span></EditorTitle>
                <EditorSBar>
                    <EditorSTitle>F<span>A</span>Q</EditorSTitle>
                    <FAQIcon onClick={() => setIsAdding(true)} $transform="rotate">
                        <EditorAdd $size="large" onClick={() => setIsAdding(true)} />
                    </FAQIcon>
                </EditorSBar>
                <EditorBox
                    axis="y"
                    onReorder={handleReorder} 
                    values={FAQList}
                >
                {
                    FAQList.map((entry) => (
                    <FAQEditEntry  
                        key={entry.faq_id}
                        item={entry}
                        setFAQList={setFAQList}
                    />))
                }
                </EditorBox>
            </EditorContent>
            <PopUp 
                condition={isAdding}
                onCancel={() => setIsAdding(false)}
            >
                <FAQAdd 
                    onCancel={() => setIsAdding(false)}
                    onDone={handleAdd}
                />
            </PopUp>
        </EditorContainer>
    )
}