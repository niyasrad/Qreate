import { DashboardContainer, DashboardContent, DashboardFront, DashboardSelector, DashboardThread, DashboardThreadL, DashboardThreadR } from "./dashboard.styles"
import dash_qa from '../../assets/dashboard/qa.png'
import Selectorcard from "../../components/selectorcard/selectorcard"
import { useGlobalContext } from "../../contexts/global.context"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/loading/loading"
import { useEffect } from "react"

const dashboardItems = [
    {
        title: 'Brand',
        description: 'Qraft your brand and fill details about your brand',
        link: '/app/brand'
    },
    {
        title: 'Editor',
        description: 'Edit your Q&As, and preview the FAQsite',
        link: '/app/editor'
    },
    {
        title: 'lytics',
        description: 'Analyze your Traffic, insights on Qustomers',
        link: '/app/analytics'
    },
    {
        title: 'FAQ',
        description: 'Visit out own preview FAQ site for inspiration.',
        link: '/faq'
    }
]


export default function Dashboard() {

    const { isLoggedIn, isLoading, handleSignOut } = useGlobalContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn && !isLoading) {
            handleSignOut!()
            navigate('/sign-in')
        }
    }, [isLoggedIn, isLoading])
    

    if (isLoading) return <Loading />

    return (
        <DashboardContainer>
            <DashboardContent>
                <DashboardFront>
                    <img 
                        src={dash_qa} 
                        alt="FAQ"
                    />
                    <DashboardThread>
                        <DashboardThreadL>Qreate.</DashboardThreadL>
                        <DashboardThreadR>Making FAQ sites actually work.</DashboardThreadR>
                    </DashboardThread>
                </DashboardFront>
                <DashboardSelector>
                    {dashboardItems.map((item, index) => {
                        return (
                            <Selectorcard 
                                key={index}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                            />
                        )
                    })}
                </DashboardSelector>
            </DashboardContent>
        </DashboardContainer>
    )
}