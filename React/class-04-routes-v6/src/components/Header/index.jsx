import { Link, NavLink } from "react-router-dom"
import "./style.css"

export function Header() {
    return(
        <header>
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