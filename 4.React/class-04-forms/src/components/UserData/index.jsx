import { Globals } from "../globals"
import { useState } from "react"

export function UserData() {
    const [user, setUser] = useState(Globals.user)

    function userShow() {
        setUser(Globals.user)
    }

    return (
        <>
            <p>UserData</p>
            <p>{user.name}</p>
            <button onClick={userShow}>Show</button>
        </>
    )
}