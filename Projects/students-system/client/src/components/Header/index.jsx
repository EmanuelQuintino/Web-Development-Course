import { HeaderContainer } from "./style"
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
            <HeaderContainer>
                <button>
                    {menuActive ?
                        <IoMdClose className="menuIconClose"onClick={toggleMenu}/> :
                        <IoMdMenu className="menuIcon" onClick={toggleMenu}/>
                    }
                </button>
                <div className="logoMenu">
                    <div>
                        <h1>Sistema de Estudantes</h1>
                        <h3>Curso de Desenvolvimento Web</h3>
                    </div>
                    <Link to="/">
                        <img src="./images/logo-rj.png" alt="logo" />
                    </Link>
                </div>
            </HeaderContainer>
            
            <div onClick={toggleMenu}>
                { menuActive && <Menu/> }
            </div>
        </>
    )
}