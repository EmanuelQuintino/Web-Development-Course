import { Link, NavLink } from "react-router-dom"
import logoReprogramaJucas from "../../images/logo-reprograma-icon.png"
import "./style.css"

export function Header() {
    return(
        <header>
            <Link to={"/"}>
                <img src={logoReprogramaJucas} alt="logo" className="logo"/>
            </Link>
            <nav>
                <ul>
                    <NavLink to="/" className={({isActive}) => isActive ? 'select' : ''}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/gallery" className={({isActive}) => isActive ? 'select' : ''}>
                        <li>Galeria</li>
                    </NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? 'select' : ''}>
                        <li>Contato</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
} 