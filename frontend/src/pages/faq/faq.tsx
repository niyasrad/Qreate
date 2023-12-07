import { FAQBox, FAQBrand, FAQBrandDetails, FAQBrandIcon, FAQContainer, FAQContent, FAQEntries } from "./faq.styles";
import { QreateText, QreateTitle } from "../../components";
import { FAQData, QreateFAQData } from "./faq.data";
import FAQEntry from "../../components/faqentry/faqentry";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";

export default function FAQ() {

    const [FAQData, setFAQData] = useState<FAQData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setFAQData(QreateFAQData)
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timeout)

    }, [])

    if (loading || FAQData === null) return <Loading />

    return (
        <FAQContainer background={FAQData.theme.background}>
            <FAQContent>
                <FAQBrand>
                    <FAQBrandIcon 
                        src={FAQData.brand_details.logo}
                        alt="Brand Logo"
                    />
                    <FAQBrandDetails>
                        <QreateTitle left color="white">{FAQData.brand_details.name}</QreateTitle>
                        <QreateText left color="white" small>{FAQData.brand_details.description}</QreateText>
                    </FAQBrandDetails>
                </FAQBrand>
                <FAQBox>
                    <QreateTitle>FAQ</QreateTitle>
                    <FAQEntries>
                    {
                        FAQData.faq_entries.map((faq_entry) => (
                            <FAQEntry 
                                question={faq_entry.question}
                                answer={faq_entry.answer}
                            />
                        ))
                    }
                    </FAQEntries>
                </FAQBox>
            </FAQContent>
        </FAQContainer>
    )
}