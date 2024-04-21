import { useNavigate } from "react-router-dom"
import { SelectorcardContainer, SelectorcardTitle, SelectorcardDescription } from "./selectorcard.styles"
import { toast } from "react-toastify"

export interface SelectorcardProps {
    title: string,
    description: string,
    link: string,
    disabled?: boolean
}

export default function Selectorcard({ title, description, link, disabled }: SelectorcardProps) {
    
    const navigate = useNavigate()

    const handleNavigate = () => {
        if (disabled) {
            toast.info("Feature Coming Soon!")
            return
        }
        navigate(link)
    }
    
    return (
        <SelectorcardContainer
            onClick={handleNavigate}
        >
            <SelectorcardTitle>Q<span>{title}</span></SelectorcardTitle>
            <SelectorcardDescription>{description}</SelectorcardDescription>
        </SelectorcardContainer>
    )

}