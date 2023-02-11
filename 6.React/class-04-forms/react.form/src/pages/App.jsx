import { UserForm } from '../components/UserForm'
import { UserData } from '../components/UserData'
import "./style.css"

export function App() {
    return (
        <div className='container'>
            <h1>Class React Forms</h1>
            <UserForm />
            <UserData />
        </div>
    )
}