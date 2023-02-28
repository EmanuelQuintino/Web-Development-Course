import { Header } from "../components/Header"
import { Container, MainArticle } from "./style"

export function App() {
  return (
    <Container>
      <Header/>
      <main>
        <MainArticle>
          <h1>App</h1>
        </MainArticle>
      </main>
    </Container>
  )
}