import Navbar from "../navbar/navbar";
import { AppcoverContainer, AppcoverDisplay } from "./appcover.styles";

export default function Appcover({ children }: { children: React.ReactNode }) {
    return (
        <AppcoverContainer>
            <Navbar></Navbar>
            <AppcoverDisplay>
                {children}
            </AppcoverDisplay>
        </AppcoverContainer>
    )

}