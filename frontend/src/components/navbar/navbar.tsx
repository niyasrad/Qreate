import { useState } from "react"
import { NavbarContainer, NavbarContent, NavbarLogo, NavbarItems, NavbarItem, NavbarSignout, NavbarMobile, NavbarTop, NavbarToggleOpen, NavbarToggleClose, NavbarDesc, NavbarMobileItems, NavbarMobileLayer } from "./navbar.styles"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../contexts/global.context"


const navItems = [
    { name: 'Dash', link: '/app/dashboard' },
    { name: 'Brand', link: '/app/brand' },
    { name: 'Editor', link: '/app/editor' },
    { name: 'lytics', link: '/app/analytics' },
]

function getTimeOfDay() {
    const time = new Date().getHours()
    if (time >= 5 && time < 12) return "Morning"
    if (time >= 12 && time < 18) return "Afternoon"
    return "Evening"
}

export default function Navbar() {

    const { handleSignOut } = useGlobalContext()

    const [mobileToggle, setMobileToggle] = useState(false)
    const navigate = useNavigate()

    return (
        <NavbarContainer>
            <NavbarContent>
                <NavbarTop>
                    <NavbarLogo>Qreateboard</NavbarLogo>
                    <NavbarToggleOpen onClick={() => setMobileToggle(true)} />
                </NavbarTop>
                <NavbarItems>
                    {navItems.map((item, index) => {
                        return (
                            <NavbarItem 
                                key={index} 
                                active={window.location.pathname === item.link}
                                onClick={() => navigate(item.link)}
                            >
                                Q<span>{item.name}</span>
                            </NavbarItem>
                        )
                    })}
                    <NavbarItem onClick={handleSignOut}>Sign-<span>Out</span><NavbarSignout /></NavbarItem>
                </NavbarItems>
            </NavbarContent>
            <NavbarMobileLayer 
                toggled={mobileToggle} 
                onClick={() => setMobileToggle(false)}  
            />
            <NavbarMobile toggled={mobileToggle}>
                <NavbarTop>
                    <NavbarLogo>Qreateboard</NavbarLogo>
                    <NavbarToggleClose onClick={() => setMobileToggle(false)} />
                </NavbarTop>
                <NavbarDesc>
                    Good {getTimeOfDay()}, Qreate. Embark on a journey of imagination where boundaries cease to exist.
                </NavbarDesc>
                <NavbarMobileItems>
                    {navItems.map((item, index) => {
                        return (
                            <NavbarItem 
                                key={index} 
                                active={window.location.pathname === item.link}
                                onClick={() => navigate(item.link)}
                            >
                                Q<span>{item.name}</span>
                            </NavbarItem>
                        )
                    })}
                    <NavbarItem onClick={handleSignOut}>Sign-<span>Out</span><NavbarSignout /></NavbarItem>
                </NavbarMobileItems>
            </NavbarMobile>
        </NavbarContainer>
    )

}