import { createContext, useEffect, useState } from "react";
import { API } from "../config/api";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [authenticated, setAuthenticated] = useState(false);
    const [userAuthData, setUserAuthData ] = useState({});

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            API.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            // API.defaults.headers.Authorization = `Bearer ${authToken}`;                      
            setAuthenticated(true)
        }
    }, [])

    function handleLogin({email, password}) {
        console.log(email, password);
        API.post("/login", {email, password})
        .then((res) => {
            if (res.data.authenticated) {
                    localStorage.setItem("authToken", JSON.stringify(res.data.token));
                    API.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                    // API.defaults.headers.Authorization = `Bearer ${res.data.token}`;
                    setUserAuthData(res.data);                      
                    setAuthenticated(true)
                }    
            })
            .catch((error) => alert(error.response.data));
    }

    console.log(userAuthData);

    return (
        <AuthContext.Provider value={{authenticated, handleLogin, userAuthData}}>
            {children}
        </AuthContext.Provider>
    )
}