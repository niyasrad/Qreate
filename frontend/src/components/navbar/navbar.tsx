import { useState } from "react"
import { NavbarContainer, NavbarContent, NavbarLogo, NavbarItems, NavbarItem, NavbarSignout, NavbarMobile, NavbarTop, NavbarToggleOpen, NavbarToggleClose, NavbarDesc, NavbarMobileItems, NavbarMobileLayer } from "./navbar.styles"
import { useNavigate } from "react-router-dom"


const navItems = [
    { name: 'Dash', link: '/app/dashboard' },
    { name: 'Brand', link: '/app/brand' },
    { name: 'Editor', link: '/app/editor' },
    { name: 'lytics', link: '/app/analytics' },
]

export default function Navbar() {

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
                    <NavbarItem>Sign-<span>Out</span><NavbarSignout /></NavbarItem>
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
                    Welcome, and a very good morning, Qreate. Ready to storm the world with your information?
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
                    <NavbarItem>Sign-<span>Out</span><NavbarSignout /></NavbarItem>
                </NavbarMobileItems>
            </NavbarMobile>
        </NavbarContainer>
    )

}