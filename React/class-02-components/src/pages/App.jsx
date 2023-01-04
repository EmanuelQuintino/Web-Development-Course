import './App.css'
import { CardProfile } from '../components/CardPerfil'

export function App() {
  return (
    <div>
      <h1>Class Components</h1>
      <CardProfile login='EmanuelQuintino' name={'Emanuel Quintino'} age={30}/>
      <CardProfile login='Mario13Sergio' name='Mario Sergio' age={15}/>
      <CardProfile login='Italo-Morais' name='Italo Morais' age={20}/>
    </div>
  )
}
  