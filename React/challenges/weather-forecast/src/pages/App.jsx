import { useEffect } from 'react'
import { useState } from 'react'
import { Card } from '../components/Card'
import './App.css'

export function App() {
  const [searchCity, setSearchCity] = useState('Jucás')
  const [cityName, setCityName] = useState('')
  const [cityWeather, setCityWeather] = useState('')
  
  function formSubmit(event) {
    event.preventDefault()
    setCityName(searchCity)
  }
  
  useEffect(() => {
    fetch(`https://goweather.herokuapp.com/weather/${searchCity}`)
      .then(request => request.json())
      .then(data => setCityWeather(data))  
  
    setCityName(searchCity) 
    console.log('Effect');
  }, [cityName])

  return (
    <div className='container'>
      <header>
        <section>
          <h1>Previsão do Tempo</h1>
        </section>

        <section className='search'>
          <form action="" onSubmit={formSubmit}>
            <input 
              type="text" 
              placeholder='Nome da cidade'
              value={searchCity}
              onChange={event => setSearchCity(event.target.value)}
            />
            <button type='submit'>Pesquisar</button>
          </form>    
        </section>
      </header>
      
      <main>
        {cityName && cityWeather && (
          <Card cityName={cityName} weather={cityWeather}/>
        )}
      </main>
    </div>
  )
}