import { createContext, useState } from "react";
import { API } from "../config/api";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [authenticated, setAuthenticated] = useState(false);

    function handleLogin({email, password}) {
        console.log(email, password);
        API.post("/login", {email, password})
            .then((res) => {
                if (res.data.authenticated) {
                    console.log(res.data);
                    setAuthenticated(true)
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    API.defaults.headers.common['Authorization'] = res.data.token;
                }    
            })
            .catch((error) => alert(error.response.data));
    }

    return (
        <AuthContext.Provider value={{authenticated, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}