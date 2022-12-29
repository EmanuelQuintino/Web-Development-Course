import "./style.css"

export function Card() {
    return (
        <article>
            <section>
                <h2>Jucás</h2>
                <p>Parcialmente nublado</p>
                <span>Vento 10km/h</span>
            </section>
            <section className="temperature">
                <img src="" alt="imagem" />
                <p>23°</p>
            </section>
            <section className="dayForecast">
                <div className="temperatureForecast">
                    <img src="" alt="image"/>
                    25°
                </div>
                <div className="windForecast">
                    <img src="" alt="image"/>
                    12km/h
                </div>
            </section>
        </article>
    )
}