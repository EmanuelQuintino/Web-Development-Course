import { Container } from "./style"
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import { Menu } from "../Menu"
import { Link } from "react-router-dom"

export function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => setMenuActive(!menuActive);
    
    return (
        <>
            <Container>
                <button onClick={toggleMenu}>
                    {menuActive ?
                        <IoMdClose className="menuIcon"/> :
                        <IoMdMenu className="menuIcon" />
                    }
                </button>
                <div className="logoMenu">
                    <div>
                        <h1>Sistema de Estudantes</h1>
                        <h3>Curso de Desenvolvimento Web</h3>
                    </div>
                    <Link to="/" onClick={menuActive ? toggleMenu : ""}>
                        <img src="./images/logo-rj.png" alt="logo" />
                    </Link>
                </div>
            </Container>
            
            <div onClick={toggleMenu}>
                { menuActive && <Menu/> }
            </div>
        </>
    )
}