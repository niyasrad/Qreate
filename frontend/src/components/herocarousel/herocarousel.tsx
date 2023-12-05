import { useState, RefObject } from 'react'
import { HeroCarouselContainer, HeroCarouselContent, HeroCarouselEntries, HeroCarouselSwitch, HeroSwitchButton } from './herocarousel.styles';
import { QreateSubtitle, QreateText, QreateTitle } from '..';

import { carouselTexts } from './herocarousel.data';
import left_switch from '../../assets/carousel/left_switch.svg';
import right_switch from '../../assets/carousel/right_switch.svg';
import { AnimatePresence } from 'framer-motion';

export default function HeroCarousel({ carouselRef }: { carouselRef: RefObject<HTMLDivElement>}) {

    const [pos, setPos] = useState<number>(0)
    const [direction, setDirection] = useState<'left' | 'right' | null>(null)
    
    const handleSwitch = (arrangement: 'left' | 'right') => {
        setDirection(arrangement)
        if (arrangement === 'left') {
            setPos(pos === 0 ? carouselTexts.length - 1 : pos - 1)
        } else {
            setPos(pos === carouselTexts.length - 1 ? 0 : pos + 1)
        }
    }

    const animationSwitch = () => {
        if (direction === 'left') return { initial: { opacity: 0, x: -50 }, exit: { opacity: 0, x: 50 } }
        else return { initial: { opacity: 0, x: 50 }, exit: { opacity: 0, x: -50 } }
    }

    return (
        <HeroCarouselContainer
            ref={carouselRef}
        >
            <HeroCarouselContent>
                <QreateSubtitle>Qreate your FAQs in an instant.</QreateSubtitle>
                <AnimatePresence mode="wait">
                    <HeroCarouselEntries
                        key={pos}
                        animate={{ opacity: 1, x: 0 }}
                        {...animationSwitch()}
                        transition={{ duration: 0.2 }}
                    >
                        <QreateTitle small>{pos + 1}. {carouselTexts[pos].title}</QreateTitle>
                        <QreateText>{carouselTexts[pos].subtitle}</QreateText>
                    </HeroCarouselEntries>
                </AnimatePresence>
                <HeroCarouselSwitch>
                    <HeroSwitchButton 
                        onClick={() => { handleSwitch('left') }}
                        src={left_switch}
                        alt="Left Switch"
                    />
                    <HeroSwitchButton 
                        onClick={() => { handleSwitch('right') }}
                        src={right_switch}
                        alt="Right Switch"
                    />
                </HeroCarouselSwitch>
            </HeroCarouselContent>
        </HeroCarouselContainer>
    )
}