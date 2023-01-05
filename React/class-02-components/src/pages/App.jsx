import './App.css'
import { CardProfile } from '../components/CardPerfil'

export function App() {
  return (
    <div>
      <h1>Class Components</h1>
      <CardProfile login='EmanuelQuintino' name={'Emanuel Quintino'} age={30}/>
      <CardProfile login='SamilaLucas1' name={'Samila Lucas'} age={18}/>
    </div>
  )
}
  