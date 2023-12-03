import { useRef, useState, useEffect } from 'react'

import { QreateButton, QreateText, QreateTitle } from "../../components";
import { HeroBG, HeroButtons, HeroContainer, HeroDesc, HeroWorking } from "./hero.styles";

import bg_desk from '../../assets/hero/bg-desk.png';
import HeroCarousel from "../../components/herocarousel/herocarousel";
import Loading from '../../components/loading/loading';

export default function Hero() {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const carouselRef = useRef<HTMLDivElement>(null)

    const handleWorkClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    useEffect(() => {
    
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    
        return () => clearTimeout(timeout)

    }, [])

    if (isLoading) return <Loading />

    return (
        <HeroContainer>
            <HeroDesc>
                <QreateTitle>Qreate</QreateTitle>
                <QreateText>Unleash the potential of clear communication. Qreate crafts FAQs that resonate with your audience.</QreateText>
                <HeroButtons>
                    <QreateButton primary>Coming Soon</QreateButton>
                    <QreateButton secondary onClick={handleWorkClick}>How It Works?</QreateButton>
                </HeroButtons>
            </HeroDesc>
            <HeroWorking>
                <HeroBG
                    src={bg_desk}
                    alt="background"
                />
                <HeroCarousel 
                    carouselRef={carouselRef}
                />
            </HeroWorking>
        </HeroContainer>
    )
}