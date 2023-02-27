import { Header } from "../../components/Header"
import { Container, MainArticle } from "./style"

export function App() {
  return (
    <Container>
      <Header/>
      <main>
        <MainArticle>
          <h1>App</h1>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis aspernatur officia, sequi tenetur harum aliquid magnam nihil ipsam consectetur dolorum recusandae ducimus saepe. Voluptatum fugit fugiat, omnis nostrum inventore ducimus!
            </p>
          </section>
        </MainArticle>
      </main>
    </Container>
  )
}