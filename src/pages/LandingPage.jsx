import { Header } from "../components/Header"
import { StyledLandingPage } from "./style"
import telephone from '../assets/telephone.png'
import { useNavigate } from "react-router-dom";


export const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header/>
            <StyledLandingPage>
                <div className="div-left">
                    <h2>Gerencie os seus contatos de uma forma muito mais segura!</h2>
                    <p>Com a ContactSpace é fácil, rapido e grátis. </p>
                    <button onClick={()=>{navigate('/register')}}>Conferir</button>
                </div>
                <div className="div-right">
                    <img src={telephone} alt="" srcset="" />
                </div>
            </StyledLandingPage>

        </>
    )
}