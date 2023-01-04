import { Link } from "react-router-dom"
import "./style.css"

export function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'} className='select'>Home</Link></li>
                    <li><Link to={'/navegation'}>Navegação</Link></li>     
                </ul>
            </nav>
        </header>
    )
} 