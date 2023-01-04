import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Class Hooks</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eos at! Commodi, laborum ratione voluptatibus dignissimos consequuntur nulla aliquid error, in assumenda, incidunt perferendis delectus vel magni magnam provident ad!
      </p>
    </div>
  )
}    