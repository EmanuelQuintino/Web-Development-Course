import "./style.css"

export function ClimateCard({climate, condition}) {
    return (
        <div className="weatherCondition">
            <p>{condition}</p>
            <h4>{climate}</h4>
        </div>
    )
}