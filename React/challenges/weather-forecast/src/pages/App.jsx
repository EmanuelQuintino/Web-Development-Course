import { Card } from '../components/Card'
import './App.css'

export function App() {
  return (
    <div className='container'>
      <header>
        <section>
          <h1>Previsão do Tempo</h1>
        </section>
        <section className='search'>
          <input 
            type="text" 
            placeholder='Nome da cidade'
            onChange={event => console.log(event.target.value)}
          />
          <button type='button'>Pesquisar</button>    
        </section>
      </header>
      
      <main>
        <Card city="Jucás" degree = "28°"/>
      </main>
    </div>
  )
}