import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header>
        <h1>App</h1>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
