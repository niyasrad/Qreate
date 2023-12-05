import { FAQEntryProps } from "../../components/faqentry/faqentry"
import qreate_logo from '../../assets/faq/logo.png';

export interface FAQData {
    brand_details: {
        name: string,
        logo: string,
        description: string
    },
    faq_entries: FAQEntryProps[],
    theme: {
        background: string
    }
}

export const QreateFAQData: FAQData = {
    brand_details: {
        name: "Qreate",
        logo: qreate_logo,
        description: "In a world of questions, be the answer. Elevate user experience with Qreate."
    },
    faq_entries: [
        {
            question: "What is Qreate and how does it work?",
            answer: "Qreate is a user-friendly platform designed to simplify the process of creating FAQ pages for websites and brands. Users can sign in, access their account dashboard, and effortlessly add, edit, or remove FAQ questions and answers. The platform provides customization options for links and allows users to preview their FAQ before publication."
        },
        {
            question: "What Customisation options are available in Qreate?",
            answer: "Qreate offers a range of customization options to ensure that your FAQ seamlessly integrates with your website's aesthetics. Users can personalize their FAQ links, making them an extension of their brand. The platform also provides the option to shorten links for enhanced user experience."
        },
        {
            question: "Can I preview my FAQ before making it live?",
            answer: "Absolutely! Qreate allows users to preview their FAQ pages before making them live. This feature enables you to visualize how your FAQ will appear on your website, allowing for any necessary adjustments to ensure a flawless user experience."
        },
        {
            question: "Is there a limit to the number of FAQ questions and answers I can add?",
            answer: "No, there is no strict limit on the number of FAQ questions and answers you can add. Qreate is designed to accommodate a diverse range of content, allowing you to create comprehensive and informative FAQ pages tailored to your specific needs."
        }
    ],
    theme: {
        background: 'black'
    }
}