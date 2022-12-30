import "./style.css"

export function Card({city, degree}) {
    return (
        <article>
            <section>
                <h2>{city}</h2>
                <div>
                    <p>Parcialmente nublado</p>
                    <span>Vento 10km/h</span>
                </div>
            </section>
            <section className="temperature">
                <img src="" alt="imagem" />
                <p>{degree}</p>
            </section>
            <section className="daysForecast">
                <div className="dayForecast">
                    <h3>Segunda</h3>
                    <div className="temperatureForecast">
                        <img src="" alt="image"/>
                        25°
                    </div>
                    <div className="windForecast">
                        <img src="" alt="image"/>
                        12km/h
                    </div>
                </div>
                <div className="dayForecast">
                    <h3>Segunda</h3>
                    <div className="temperatureForecast">
                        <img src="" alt="image"/>
                        25°
                    </div>
                    <div className="windForecast">
                        <img src="" alt="image"/>
                        12km/h
                    </div>
                </div>
                <div className="dayForecast">
                    <h3>Segunda</h3>
                    <div className="temperatureForecast">
                        <img src="" alt="image"/>
                        25°
                    </div>
                    <div className="windForecast">
                        <img src="" alt="image"/>
                        12km/h
                    </div>
                </div>
            </section>
        </article>
    )
}