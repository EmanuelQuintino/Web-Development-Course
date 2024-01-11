import { Link, NavLink } from "react-router-dom";
import "./style.css";

export function Header() {
  return (
    <header>
      <Link to="/">
        <h1>App</h1>
      </Link>

      <nav>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
