import { Link } from "react-router-dom"
import "./style.css"

export function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/navegation'}>Navegação</Link></li>     
                </ul>
            </nav>
        </header>
    )
} 