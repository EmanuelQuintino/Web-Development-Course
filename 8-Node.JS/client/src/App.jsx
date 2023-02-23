import { useState, useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() =>{
    fetch('localhost:3000/')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <form>
        <input type="text" />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App
