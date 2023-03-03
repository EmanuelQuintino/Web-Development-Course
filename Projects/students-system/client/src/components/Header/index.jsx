import { HeaderContainer } from "./style"
import { FcMenu } from "react-icons/fc"

export function Header() {
    return (
        <HeaderContainer>
            <FcMenu className="menuIcon"/>
            <div className="logoMenu">
                <div>
                    <h1>Sistema de Estudantes</h1>
                    <h3>Curso de Desenvolvimento Web</h3>
                </div>
                <img src="./images/logo-rj.png" alt="logo" />
            </div>
        </HeaderContainer>
    )
}