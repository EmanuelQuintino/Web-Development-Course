import { UserForm } from '../components/UserForm'
import { UserData } from '../components/UserData'

export function App() {
    return (
        <div className='container'>
            <UserForm />
            <UserData />
        </div>
    )
}