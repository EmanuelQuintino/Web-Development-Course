import './style.css'

export function CardPerfile({login, name, age}) {
    return (
        <div className="cardContainer">
            <img src={`https://github.com/${login}.png`} alt="image" />
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
        </div>
    )
}