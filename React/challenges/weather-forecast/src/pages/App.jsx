import './App.css'

export function App() {
  return (
    <div className='container'>
      <header>
        <section>
          <h1>Previsão do Tempo</h1>
        </section>
        <section>
          <input type="text" placeholder='Digite o nome da cidade'/>
          <button type='button'>Pesquisar</button>    
        </section>
      </header>
    </div>
  )
}