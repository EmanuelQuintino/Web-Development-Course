import { HeaderContainer } from "./style"
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import { Menu } from "../Menu"

export function Header() {
    const [menuActive, setMenuActive] = useState(false);
    function toggleMenu() {
        setMenuActive(!menuActive)
    }
    return (
        <>
            <HeaderContainer>
                {menuActive ?
                    <IoMdClose className="menuIconClose"onClick={toggleMenu}/> :
                    <IoMdMenu className="menuIcon" onClick={toggleMenu}/>
                }
                <div className="logoMenu">
                    <div>
                        <h1>Sistema de Estudantes</h1>
                        <h3>Curso de Desenvolvimento Web</h3>
                    </div>
                    <img src="./images/logo-rj.png" alt="logo" />
                </div>
            </HeaderContainer>
            { menuActive ? <Menu/> : "" }
        </>
    )
}