import { useState } from 'react'
import { Container } from './style'

export function App() {
  const [count, setCount] = useState(5)
  const [option, setOption] = useState('Class')

  return (
    <Container>
      <h1>{option} {count} - Styled Components</h1>
      <img src="./react.svg" alt="" />
      <select value={option} onChange={(event) => setOption(event.target.value)}>
        <option value="Class">Class</option>
        <option value="Aula">Aula</option>
      </select>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </Container>
  )
}