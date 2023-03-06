import { Header } from "../components/Header"
import { Container, MainArticle , Footer } from "./style"
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css"

export function App() {
  return (
    <Container>
      <Header/>
      <main>
        <MainArticle>
          <Outlet/>
        </MainArticle>
      </main>  
      <Footer>
        Web Development Course
      </Footer>
    </Container>
  )
}