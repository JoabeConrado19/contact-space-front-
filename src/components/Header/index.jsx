import { StyledHeader } from "./style"
import { useNavigate } from "react-router-dom";



export const Header = () => {
    const navigate = useNavigate()

    return (
        <StyledHeader>
            <h1 onClick={()=>{navigate('/')}}>Contact Space</h1>
            <div>
                <h2 onClick={()=>{navigate('/login')}}>Login</h2>
                <button onClick={()=>{navigate('/register')}}>Cadastro</button>
            </div>
        </StyledHeader>


    )
}