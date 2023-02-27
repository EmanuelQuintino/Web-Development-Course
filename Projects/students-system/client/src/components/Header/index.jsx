import { HeaderContainer } from "./style"

export function Header() {
    return (
        <HeaderContainer>
            <img src="./images/logo-rj.png" alt="logo" />
            <div>
                <h1>Sistema de <span>Estudantes</span></h1>
                <h3>Curso de Desenvolvimento Web</h3>
            </div>
        </HeaderContainer>
    )
}