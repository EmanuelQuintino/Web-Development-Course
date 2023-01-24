import { Container } from './style'

export function App() {
  return (
    <Container>
      <h1>Class 06 - Styled Components</h1>
      <img src="./react.svg" alt="" />

      <form action="">
        <section>
          <label htmlFor="email">Email:</label>
          <input type="email" id='email'/>
        </section>

        <section>
          <label htmlFor="password">Senha:</label>
          <input type="password" id='password'/>
        </section>

        <button>Login</button>
      </form>
    </Container>
  )
}