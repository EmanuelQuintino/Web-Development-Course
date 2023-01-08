import {useState, useEffect} from "react"
import { ClimateCard } from "../../components/ClimateCard"
import "./style.css"

export function App() {  
  const [city, setCity] = useState('')
  const [cityAux, setCityAux] = useState('')
  const [data, setData] = useState()

  function searchCity(event) {
    event.preventDefault();
    setCity(cityAux);
  }
  
  useEffect(() => {
    if (city) {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${city}&days=5&lang=pt`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data);
      })
    }
  }, [city])

  return (
    <div className="container">
      <header>
        <h1>Previsão do tempo</h1>
        <form action="">
          <input type="text" onChange={(event) => setCityAux(event.target.value)}/>
          <button onClick={searchCity}>Buscar</button>
        </form>
      </header>

        <main>
          <article>
              <section className="blockCityName">
                {/* <h2>{data.location.name}, {data.location.region}</h2> */}
                <h2>jucas, ceara</h2>
                <p>Brasil</p>
              </section>

            <section className="blockCurrentTime">
              {/* <img src={data.current.condition.icon} alt="icon-weather" /> */}
              <img src={''} alt="icon-weather" />
              <div className="currentTime">
                <div className="blockDegree">
                  <p className="degreeCurrent">24°</p>
                  <p>
                    <span>28°</span>
                    <span>23°</span>
                  </p>
                </div>
                <div>
                  <p>Uma pancada de chuva</p>
                  <p>Sensação térmica de 25°</p>
                </div>
              </div>
            </section>

            <section className="containerWeatherCondition">
              <ClimateCard climate='Vento' condition='14.4km/h'/>
              <ClimateCard climate='Umidade' condition='92%'/>
              <ClimateCard climate='Chuva' condition='120.4mm'/>
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
        </main>
    </div>
    )   
}