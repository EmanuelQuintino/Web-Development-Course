import { Container} from "./style"
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Container>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>  
      <footer>
        Web Development Course
      </footer>
    </Container>
  )
}