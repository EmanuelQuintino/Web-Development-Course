import { GlobalVariables } from "../../globals"
import { useState } from "react"

export function UserData() {
    const [user, setUser] = useState(GlobalVariables.user)

    function userShow() {
        setUser(GlobalVariables.user)
    }

    return (
        <>
            <h2>UserData</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={userShow}>Show</button>
        </>
    )
}