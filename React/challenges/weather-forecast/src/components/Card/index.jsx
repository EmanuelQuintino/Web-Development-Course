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
    weather.description
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
                    <span>{weather.wind}</span>
                </div>
            </section>
            <section className="temperature">
                <img src="" alt="imagem" />
                <p>{weather.temperature}</p>
            </section>
            <section className="daysForecast">
                {
                    weather.forecast.map((forecast, index) => {
                        const weekDayForecast = new Date().setDate(new Date().getDate() + index + 1)
                        const weekDayFormat = Intl.DateTimeFormat('pt-BR', {weekday: 'short'}).format(weekDayForecast)
                        return (
                            <div className="dayForecast">
                            <h3>{weekDayFormat}</h3>
                            <div className="temperatureForecast">
                                <img src="" alt="image"/>
                                {forecast.temperature}
                            </div>
                            <div className="windForecast">
                                <img src="" alt="image"/>
                                {forecast.wind}
                            </div>
                        </div>
                        )
                    })
                }
            </section>
        </article>
    )
}