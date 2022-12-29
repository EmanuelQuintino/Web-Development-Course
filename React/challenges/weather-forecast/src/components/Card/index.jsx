import "./style.css"

export function Card() {
    return (
        <article>
            <section>
                <h2>Jucás</h2>
                <div>
                    <p>Parcialmente nublado</p>
                    <span>Vento 10km/h</span>
                </div>
            </section>
            <section className="temperature">
                <img src="" alt="imagem" />
                <p>23°</p>
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