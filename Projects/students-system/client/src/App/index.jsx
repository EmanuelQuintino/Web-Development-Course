import { Header } from "../components/Header"
import { Menu } from "../components/Menu"
import { Container, MainArticle , Footer } from "./style"
import { Outlet } from "react-router-dom"

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