import React from 'react'
import './style.css'

// export function CardPerfile({login, name, age}) {
//     return (
//         <div className="cardContainer">
//             <img src={`https://github.com/${login}.png`} alt="image" />
//             <p>Nome: {name}</p>
//             <p>Idade: {age}</p>
//         </div>
//     )
// }

export class CardPerfile extends React.Component {
    render() {
        return (
            <div className="cardContainer">
                 <img src={`https://github.com/${this.props.login}.png`} alt="image" />
                 <p>Nome: {this.props.name}</p>
                 <p>Idade: {this.props.age}</p>
             </div>
        )
    }
}