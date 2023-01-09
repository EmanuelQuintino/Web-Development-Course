import {useState, useEffect} from "react"
import { GoSearch } from 'react-icons/go'
import { BsThermometerHigh } from 'react-icons/bs'
import { ClimateCard } from "../../components/ClimateCard"
import "./style.css"

export function App() {  
  const [inputCity, setInputCity] = useState('')
  const [searchedCity, setSearchedCity] = useState('jucas')
  const [weatherData, setWeatherData] = useState(null)
  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=5&lang=pt`

  async function getCityWeather() {
    const response = await fetch(API)
    const data = await response.json()
    setWeatherData(data)
  }

  function searchCity(event) {
    event.preventDefault()
    setSearchedCity(inputCity)
  }

  useEffect(() => {
    getCityWeather()
  }, [searchedCity])

  return (
    <div className="container">
      <header>
        <h1>Previsão do tempo</h1>
        <form action="">
          <input type="text" onChange={(event) => setInputCity(event.target.value)}/>
          <GoSearch className='searchButton'/>
          <button onClick={searchCity}>Buscar</button>
        </form>
      </header>

        <main>
          {searchedCity && weatherData && (
            <article>
              <section className="blockCityName">
                <h2>{weatherData.location.name}, {weatherData.location.region}</h2>
                <p>{weatherData.location.country}</p>
              </section>

              <section className="blockCurrentTime">
                <img src={weatherData.current.condition.icon} alt="icon-weather" className="iconCurrentWeather"/>
                <div className="currentTime">
                  <div className="blockDegree">
                    <BsThermometerHigh className='iconThermometer'/>
                    <p className="degreeCurrent">{weatherData.current.temp_c}°</p>
                    <p>
                      <span className="degreeMax">{weatherData.forecast.forecastday[0].maxtemp_c}°</span>
                      <span className="degreeMin">{weatherData.forecast.forecastday[0].mintemp_c}°</span>
                    </p>
                  </div>
                  <div>
                    <p>{weatherData.current.condition.text}</p>
                    <p>Sensação térmica de {weatherData.current.feelslike_c}°</p>
                  </div>
                </div>
              </section>

              <section className="containerWeatherCondition">
                <ClimateCard climate='Vento' condition={`${weatherData.current.wind_kph}km/h`}/>
                <ClimateCard climate='Umidade' condition={`${weatherData.current.humidity}%`}/>
                <ClimateCard climate='Chuva' condition={`${weatherData.current.precip_mm}mm`}/>
              </section>

              <section className="containerWeatherForecast">
                <div className="blockWeatherForecast">
                  <h3>Seg</h3>
                  <img src="" alt="icon" />
                  <p className="forecastDegreeMaxMin">
                      <span>28°</span>
                      <span>23°</span>
                  </p>
                </div>

                <div className="blockWeatherForecast">
                  <h3>Ter</h3>
                  <img src="" alt="icon" />
                  <p className="forecastDegreeMaxMin">
                      <span>28°</span>
                      <span>23°</span>
                  </p>
                </div>

                <div className="blockWeatherForecast">
                  <h3>Qua</h3>
                  <img src="" alt="icon" />
                  <p className="forecastDegreeMaxMin">
                      <span>28°</span>
                      <span>23°</span>
                  </p>
                </div>

                <div className="blockWeatherForecast">
                  <h3>Qui</h3>
                  <img src="" alt="icon" />
                  <p className="forecastDegreeMaxMin">
                      <span>28°</span>
                      <span>23°</span>
                  </p>
                </div>

                <div className="blockWeatherForecast">
                  <h3>Sex</h3>
                  <img src="" alt="icon" />
                  <p className="forecastDegreeMaxMin">
                      <span>28°</span>
                      <span>23°</span>
                  </p>
                </div>

                <div className="blockWeatherForecast">
                  <h3>Sab</h3>
                  <img src="" alt="icon" />
                  <p className="forecastDegreeMaxMin">
                      <span>28°</span>
                      <span>23°</span>
                  </p>
                </div>

                <div className="blockWeatherForecast">
                  <h3>Dom</h3>
                  <img src="" alt="icon" />
                  <p className="forecastDegreeMaxMin">
                      <span>28°</span>
                      <span>23°</span>
                  </p>
                </div>
              </section>
            </article>
          )}
        </main>
    </div>
    )   
}