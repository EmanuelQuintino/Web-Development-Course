import { Link, NavLink } from "react-router-dom"
import "./style.css"

export function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? 'select' : ''}>Home</NavLink></li>
                    <li><NavLink to="/gallery" className={({isActive}) => isActive ? 'select' : ''}>Galeria</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? 'select' : ''}>Contato</NavLink></li>
                </ul>
            </nav>
        </header>
    )
} 