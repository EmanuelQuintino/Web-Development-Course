import { useEffect } from 'react'
import { useState } from 'react'
import { Card } from '../components/Card'
import { GoSearch } from 'react-icons/go'
import { ImSpinner2 } from 'react-icons/im'
import './App.css'

export function App() {
  const [searchCity, setSearchCity] = useState('')
  const [cityName, setCityName] = useState('')
  const [cityWeather, setCityWeather] = useState('')
  const [isLoading, setIsLoading] = useState()
  
  function formSubmit(event) {
    event.preventDefault()
    setCityName(searchCity)
  }
  
  useEffect(() => {
    async function searchCityAPI() {
      cityName ? setIsLoading(true): setIsLoading(false)
      try {
        // https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=Jucas&days=3
        const request = await fetch(`https://goweather.herokuapp.com/weather/${searchCity}`)
        const data = await request.json()
        setCityWeather(data)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      } 
      setCityName(searchCity) 
    }

    searchCityAPI()
  }, [cityName])

  return (
    <div className='container'>
      <header>
        <section>
          <h1>Previsão do Tempo</h1>
        </section>

        <section className='search'>
          <form action="" onSubmit={formSubmit}>
            <div className='inputContainer'>
              <label htmlFor="searchCity">Pesquisar cidade</label>
              <input 
                id='searchCity'
                type="text" 
                placeholder='Nome da cidade'
                value={searchCity}
                onChange={event => setSearchCity(event.target.value)}
                />
            </div>
            <button type='submit'>
                  <GoSearch/>
            </button>
          </form>    
        </section>
      </header>
      
      <main>
        {
          isLoading ? 
          <ImSpinner2 className='spinnerLoading'/> : 
          cityName && cityWeather && (
            <Card cityName={cityName} weather={cityWeather}/>
          )
        }
  
      </main>
    </div>
  )
}