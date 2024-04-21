import { DashboardContainer, DashboardContent, DashboardFront, DashboardSelector, DashboardThread, DashboardThreadL, DashboardThreadR } from "./dashboard.styles"
import dash_qa from '../../assets/dashboard/qa.png'
import Selectorcard from "../../components/selectorcard/selectorcard"
import { useGlobalContext } from "../../contexts/global.context"

export default function Dashboard() {
    
    const { customURL, brandID } = useGlobalContext()
    
    let ping_url = customURL ? customURL : 'id/' + brandID

    const dashboardItems = [
        {
            title: 'Brand',
            description: 'Qraft your brand and fill details about your brand',
            link: '/app/brand'
        },
        {
            title: 'Editor',
            description: 'Edit your Q&As, and preview the URL of your site',
            link: '/app/editor'
        },
        {
            title: 'lytics',
            description: 'Analyze your Traffic, insights on Qustomers',
            link: '/app/analytics',
            disabled: true
        },
        {
            title: 'FAQ',
            description: 'Visit your Q&As in action, in Qreate',
            link: '/brand/' + ping_url
        }
    ]

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
                                disabled={item.disabled}
                            />
                        )
                    })}
                </DashboardSelector>
            </DashboardContent>
        </DashboardContainer>
    )
}