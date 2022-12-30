import { BsThermometerHigh } from "react-icons/bs"
import { TbWindsock } from "react-icons/tb"

import {v4 as uuid } from "uuid"
import "./style.css"

export function Card({cityName, weather}) {
    const translateWeatherDescription = {
        "Partly cloudy": "Parcialmente nublado",          
        "Clear": "Tempo limpo",          
        "Light snow": "Neve leve",          
        "Rain with thunderstorm": "Chuva com trovoada",          
        "Sunny": "Ensolarado",          
        "Patchy rain possible": "Possibilidade de chuva irregular",          
    }

    return (
        <article>
            <section>
                <h2>{cityName}</h2>
                <div>
                    <p>
                        {
                            translateWeatherDescription[weather.description] ? 
                            translateWeatherDescription[weather.description] :
                            weather.description
                        } 
                    </p>
                    <span>
                        {weather.wind}
                        <TbWindsock/>
                    </span>
                </div>
            </section>
            <section className="temperature">
                <p>{weather.temperature.replace(' ', '')}</p>
                <BsThermometerHigh/>
            </section>
            <section className="daysForecast">
                {
                    weather.forecast.map((forecast, index) => {
                        const weekDayForecast = new Date().setDate(new Date().getDate() + index + 1)
                        const weekDayFormat = Intl.DateTimeFormat('pt-BR', {weekday: 'short'}).format(weekDayForecast)
                        return (
                            <div className="dayForecast" key={uuid()}>
                            <h3>{weekDayFormat}</h3>
                            <div className="temperatureForecast">
                                {forecast.temperature.replace(' ', '')}
                                <BsThermometerHigh/>
                            </div>
                            <div className="windForecast">
                                {forecast.wind.replace(' ', '')}
                                <TbWindsock/>
                            </div>
                        </div>
                        )
                    })
                }
            </section>
        </article>
    )
}