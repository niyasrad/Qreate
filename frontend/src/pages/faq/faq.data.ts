import { FAQEntryProps } from "../../components/faqentry/faqentry"

export interface FAQDataInterface {
    brand_id: string,
    brand_name: string,
    brand_desc: string,
    brand_email: string,
    image_url: boolean,
    custom_url: string,
    faq: FAQEntryProps[]
}

export const QreateFAQData: FAQDataInterface = {
    brand_id: "1",
    brand_name: "Qreate",
    brand_desc: "In a world of questions, be the answer. Elevate user experience with Qreate.",
    brand_email: "qreate@gmail.com",
    image_url: false,
    custom_url: "qreate",
    faq: [
        {
            faq_id: "1",
            question: "What is Qreate and how does it work?",
            answer: "Qreate is a user-friendly platform designed to simplify the process of creating FAQ pages for websites and brands. Users can sign in, access their account dashboard, and effortlessly add, edit, or remove FAQ questions and answers. The platform provides customization options for links and allows users to preview their FAQ before publication."
        },
        {
            faq_id: "2",
            question: "What Customisation options are available in Qreate?",
            answer: "Qreate offers a range of customization options to ensure that your FAQ seamlessly integrates with your website's aesthetics. Users can personalize their FAQ links, making them an extension of their brand. The platform also provides the option to shorten links for enhanced user experience."
        },
        {
            faq_id: "3",
            question: "Can I preview my FAQ before making it live?",
            answer: "Absolutely! Qreate allows users to preview their FAQ pages before making them live. This feature enables you to visualize how your FAQ will appear on your website, allowing for any necessary adjustments to ensure a flawless user experience."
        },
        {
            faq_id: "4",
            question: "Is there a limit to the number of FAQ questions and answers I can add?",
            answer: "No, there is no strict limit on the number of FAQ questions and answers you can add. Qreate is designed to accommodate a diverse range of content, allowing you to create comprehensive and informative FAQ pages tailored to your specific needs."
        }
    ]
}