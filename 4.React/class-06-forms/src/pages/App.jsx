import { useState } from 'react'
import './App.css'

export function App() {
  return (
    <div className="App">
      <form action="get">
        <section>
          <label htmlFor="inputName">
            Nome:
          </label>
          <input type="text" id='inputName' name='nome' placeholder='Digite seu nome' />
        </section>
        <button>Enviar</button>
      </form>
    </div>
  )
}