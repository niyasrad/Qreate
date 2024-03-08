import { NavbarContainer, NavbarContent, NavbarLogo, NavbarItems, NavbarItem } from "./navbar.styles"

const navItems = [
    { name: 'Dash', link: '/app/dashboard'},
    { name: 'Brand', link: '/app/brand' },
    { name: 'Editor', link: '/app/editor' },
    { name: 'lytics', link: '/app/analytics' },
]

export default function Navbar() {

    return (
        <NavbarContainer>
            <NavbarContent>
                <NavbarLogo>Qreateboard</NavbarLogo>
                <NavbarItems>
                    {navItems.map((item, index) => {
                        return (
                            <NavbarItem key={index} active={window.location.pathname === item.link}>
                                Q<span>{item.name}</span>
                            </NavbarItem>
                        )
                    })}
                    <NavbarItem>Sign-<span>Out</span></NavbarItem>
                </NavbarItems>
            </NavbarContent>
        </NavbarContainer>
    )

}