import { Link, NavLink, Outlet } from "react-router-dom";
import { Container } from "./style";

export function App() {
  return (
    <Container>
      <header>
        <Link to="/">
          <h1>Class 07 Routes</h1>
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Link to="https://emanuelquintino.github.io/Page-WDC/" target="_blank">
          Reprograma Jucás
        </Link>
      </footer>
    </Container>
  );
}
