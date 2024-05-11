import { useRef, useState, useEffect } from 'react'

import { QreateButton, QreateText, QreateTitle } from "../../components";
import { HeroBG, HeroButtons, HeroContainer, HeroDesc, HeroWorking } from "./hero.styles";

import bg_desk from '../../assets/hero/bg-desk.png';
import HeroCarousel from "../../components/herocarousel/herocarousel";
import Loading from '../../components/loading/loading';
import { useNavigate } from 'react-router-dom';

export default function Hero() {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const carouselRef = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

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

    return (
        <HeroContainer>
        {
            isLoading ? <Loading />
            :
            <>
                <HeroDesc>
                    <QreateTitle color='white'>Qreate</QreateTitle>
                    <QreateText color='white'>Unleash the potential of clear communication. Qreate crafts FAQs that resonate with your audience.</QreateText>
                    <HeroButtons>
                        <QreateButton onClick={() => navigate('/sign-up')}>Open Qreate</QreateButton>
                        <QreateButton primary onClick={handleWorkClick}>How It Works?</QreateButton>
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
            </>
        }
        </HeroContainer>
    )
}