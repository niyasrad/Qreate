import { FAQBox, FAQBrand, FAQBrandDetails, FAQBrandIcon, FAQContainer, FAQContent, FAQEntries } from "./faq.styles";
import { QreateText, QreateTitle } from "../../components";
import { FAQDataInterface } from "./faq.data";
import FAQEntry from "../../components/faqentry/faqentry";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import qreate_logo from '../../assets/faq/logo.png';

export default function FAQ() {

    const [FAQData, setFAQData] = useState<FAQDataInterface | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const { custom_url, brand_id } = useParams()

    useEffect(() => {

        if (!custom_url && !brand_id) {
            toast.error("Invalid URL")
            return
        }
        let ping_url = custom_url ? custom_url : 'id/' + brand_id

        axios.get(import.meta.env.VITE_BASE_API + '/brand/' + ping_url)
        .then((res: any) => {
            const data = res.data
            const brand = data.data
            setFAQData(brand)
            toast.success(data.message)
        })
        .catch(() => {
            toast.error("Something Went Wrong!")
        })
        
        const timeout = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timeout)

    }, [])

    

    return (
        <FAQContainer background="black">
        {
            loading || FAQData === null ? <Loading />
            :
            <FAQContent>
                <FAQBrand>
                    <FAQBrandIcon 
                        src={FAQData.image_url ? import.meta.env.VITE_BASE_API + '/cdn_asset/brand/' + FAQData.brand_id + '.png' : qreate_logo}
                        alt="Brand Logo"
                    />
                    <FAQBrandDetails>
                        <QreateTitle left color="white">{FAQData.brand_name}</QreateTitle>
                        <QreateText left color="white" small>{FAQData.brand_desc}</QreateText>
                    </FAQBrandDetails>
                </FAQBrand>
                <FAQBox>
                    <QreateTitle>FAQ</QreateTitle>
                    <FAQEntries>
                    {
                        FAQData.faq.map((faq_entry) => (
                            <FAQEntry
                                key={faq_entry.faq_id}
                                faq_id={faq_entry.faq_id}
                                question={faq_entry.question}
                                answer={faq_entry.answer}
                            />
                        ))
                    }
                    </FAQEntries>
                </FAQBox>
            </FAQContent>
        }
        </FAQContainer>
    )
}