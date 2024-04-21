import { useEffect, useState } from "react";
import { EditorAdd, EditorBox, EditorContainer, EditorBoxD, EditorBoxDElement, EditorBoxDTitle, EditorBoxDDesc, EditorBoxDSwitch, EditorBoxDSwitchButton, EditorBoxDEditor, EditorBoxDLeft, EditorBoxDRight } from "./editor.styles";
import axios from "axios";
import FAQEditEntry from "../../components/faqeditentry/faqeditentry";
import FAQAdd from "../../components/faqadd/faqadd";
import PopUp from "../../components/popup/popup";
import { toast } from "react-toastify";
import { FAQIcon } from "../../components/faqeditentry/faqeditentry.styles";
import Loading from "../../components/loading/loading";
import { useGlobalContext } from "../../contexts/global.context";
import { AppContent, AppDesc, AppSBar, AppSTitle, AppTitle, CancelIcon, DoneIcon, EditIcon } from "../../components";

export interface FAQEntryInterface {
    faq_id: string,
    question: string,
    answer: string,
    order: number
}

export default function Editor() {

    const { brandID, customURL, setCustomURL } = useGlobalContext()

    const [FAQList, setFAQList] = useState<FAQEntryInterface[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [customURLInput, setCustomURLInput] = useState<string>(customURL)

    const [isAdding, setIsAdding] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [isCustomURL, setisCustomURL] = useState<boolean>(customURL !== "")

    useEffect(() => {
        /*

        UseEffect Function to get FAQ List

        @return void
        */

        axios.get(import.meta.env.VITE_BASE_API + '/faq/get-faqs')
        .then((res) => {
            setFAQList(res.data.data.faq_list.sort((a: FAQEntryInterface, b: FAQEntryInterface) => a.order - b.order))

            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        })
        .catch(() => {
            toast.error("An error occurred while getting FAQs!")
        })
    }, [])

    const handleReorder = (unknownNewOrder: unknown[]) => {
        /*
        Function to handle reordering of FAQ List

        @param newOrder: FAQEntryInterface[]

        @return void
        */
        
        const newOrder = unknownNewOrder as FAQEntryInterface[]

        const newFAQList = newOrder.map((entry: FAQEntryInterface, index: number) => {
            return {
                ...entry,
                order: index + 1
            }
        }) as FAQEntryInterface[]

        axios.put(import.meta.env.VITE_BASE_API + '/faq/update-all-faqs', newFAQList)
        .then(() => {})
        .catch(() => {
            toast.error("An error occurred while updating FAQ List!")
        })

        setFAQList(newFAQList)
    }

    const handleAdd = (question: string, answer: string) => {
        /*

        Function to handle adding of FAQ

        @param question: string
        @param answer: string

        @return void
        */

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

    const handleIsCustomURL = () => {
        /*

        Function to handle toggling of Custom URL

        @return void
        */
        if (isCustomURL) {
            axios.delete(import.meta.env.VITE_BASE_API + '/url/delete-url')
            .then(() => {
                toast.success("Custom URL Removed Successfully!")
            })
            .catch(() => {
                toast.error("An error occurred while removing Custom URL!")
            })
            setCustomURLInput('')
            setIsEditing(false)
        } else {
            setCustomURLInput(brandID)
            setCustomURL!(brandID)
            axios.post(import.meta.env.VITE_BASE_API + '/url/edit-url', {}, {
                params: {
                    custom_url: brandID
                }
            })  
            .then(() => {
                toast.success("Custom URL Set Successfully!")
            })
            .catch(() => {
                toast.error("An error occurred while setting Custom URL!")
            })
        } 
        setisCustomURL(prev => !prev)
    }

    const handleURLEdit = () => {
        /*

        Function to handle editing of Custom URL

        @return void
        */
        if (!isCustomURL) {
            return
        }
        setIsEditing(!isEditing)
    }

    const handleURLEditCancel = () => {
        /*

        Function to handle cancelling of Custom URL

        @return void
        */

        setCustomURLInput(customURL)
        setIsEditing(false)
    }

    const handleURLEditDone = () => {
        /*

        Function to handle setting of Custom URL

        @return void
        */
        if (isCustomURL && customURLInput.trim() !== "") {
            if (!/^[a-zA-Z0-9]*$/.test(customURLInput)) {
                toast.error("Custom URL can only contain alphabets and numbers!")
                return
            }
            axios.post(import.meta.env.VITE_BASE_API + '/url/edit-url', {}, {
                params: {
                    custom_url: customURLInput
                }
            })  
            .then(() => {
                setCustomURL!(customURLInput.trim())
                setIsEditing(false)
                toast.success("Custom URL Set Successfully!")
            })
            .catch(() => {
                toast.error("An error occurred while setting Custom URL!")
            })
        }
    }

    return (
        <EditorContainer>
            <AppContent>
                <AppTitle>Q<span>Editor</span></AppTitle>
                <AppSBar>
                    <AppSTitle>F<span>A</span>Q</AppSTitle>
                    <FAQIcon onClick={() => setIsAdding(true)} $transform="rotate">
                        <EditorAdd $size="large" onClick={() => setIsAdding(true)} />
                    </FAQIcon>
                </AppSBar>
                <AppDesc>
                    Manage your Frequently Asked Questions here. Questions can be <span>added</span> by clicking on the add button on the top-right. This page supports <span>reordering</span> of questions by dragging and dropping using the icon on the left of the question. If you want to delete a <span>question/modify</span> a question, please use the gear icon on the right of the question.
                </AppDesc>
                <EditorBox
                    axis="y"
                    onReorder={handleReorder} 
                    values={FAQList}
                    style={{ height: isLoading ? "20rem" : "auto" }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                >
                {
                    isLoading ? (
                        <Loading />
                    ) : FAQList.map((entry) => (
                    <FAQEditEntry  
                        key={entry.faq_id}
                        item={entry}
                        setFAQList={setFAQList}
                    />))
                }
                </EditorBox>
            </AppContent>            
            <AppContent>
                <AppSBar>
                    <AppSTitle>U<span>R</span>L</AppSTitle>
                </AppSBar>
                <AppDesc>
                    You can choose to adopt for a <span>Custom-URL</span>. This will make it easier for your users to access the FAQ page. <span>To note,</span> the default URL  will still be accessible even after setting a custom URL. If you want to remove the custom URL, you can toggle the switch to <span>OFF</span>.
                </AppDesc>
                <EditorBoxD>
                    <EditorBoxDElement>
                        <EditorBoxDTitle>Custom URL</EditorBoxDTitle>
                        <EditorBoxDDesc>Enable allocation of a Custom-URL, based on availability of the name. If enabled, you can edit the URL in the preview section.</EditorBoxDDesc>
                        <EditorBoxDSwitch
                            onClick={handleIsCustomURL}
                            animate={{ backgroundColor: !isCustomURL ? "#1C1A1B" : "#FFFFFF" }}
                            transition={{ duration: 0.1 }}
                        >
                            <EditorBoxDSwitchButton 
                                animate={{ x: isCustomURL ? "100%" : "0" }}
                                transition={{ duration: 0.1 }}
                            />
                        </EditorBoxDSwitch>
                    </EditorBoxDElement>
                    <EditorBoxDElement>
                        <EditorBoxDTitle>URL Edit/Preview</EditorBoxDTitle>
                        <EditorBoxDDesc>This is the URL which users see in their browser. Can be editable.</EditorBoxDDesc>
                        <EditorBoxDEditor>
                            <EditorBoxDLeft>
                                <span>qreate.vercel.app/{isCustomURL ? "brand": "faq"}/</span>
                                <input 
                                    type="text" 
                                    value={customURLInput}
                                    onChange={(e) => setCustomURLInput(e.target.value)}
                                    placeholder={brandID}
                                    disabled={!isCustomURL || !isEditing}
                                />
                            </EditorBoxDLeft>
                            <EditorBoxDRight>
                            {
                                !isEditing ? 
                                <FAQIcon $transform="rotate" onClick={handleURLEdit}>
                                    <EditIcon />
                                </FAQIcon>
                                :
                                <>
                                    <FAQIcon $color="white" onClick={handleURLEditCancel}>
                                        <CancelIcon />
                                    </FAQIcon>
                                    <FAQIcon $color="white" onClick={handleURLEditDone}>
                                        <DoneIcon />
                                    </FAQIcon>
                                </>
                            }
                            </EditorBoxDRight>
                        </EditorBoxDEditor>
                    </EditorBoxDElement>
                </EditorBoxD>
            </AppContent>
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