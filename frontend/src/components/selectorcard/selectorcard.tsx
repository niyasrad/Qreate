import { useNavigate } from "react-router-dom"
import { SelectorcardContainer, SelectorcardTitle, SelectorcardDescription } from "./selectorcard.styles"

export interface SelectorcardProps {
    title: string,
    description: string,
    link: string,
}

export default function Selectorcard({ title, description, link }: SelectorcardProps) {
    
    const navigate = useNavigate()
    
    return (
        <SelectorcardContainer
            onClick={() => navigate(link)}
        >
            <SelectorcardTitle>Q<span>{title}</span></SelectorcardTitle>
            <SelectorcardDescription>{description}</SelectorcardDescription>
        </SelectorcardContainer>
    )

}