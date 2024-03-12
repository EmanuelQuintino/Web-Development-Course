import { createContext, useEffect, useState } from "react";
import { API } from "../config/api";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [userAuthData, setUserAuthData ] = useState({});

    useEffect(() => {
        const authUser = JSON.parse(localStorage.getItem("@studentsSystem:authUser"));
        if (authUser) {
            API.defaults.headers.common['Authorization'] = `Bearer ${authUser.token}`;
            setUserAuthData(authUser);                    
        }
    }, [])

    function handleLogin({email, password}) {
        API.post("/login", {email, password})
        .then((res) => {
            if (res.data.authenticated) {
                    API.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                    localStorage.setItem("@studentsSystem:authUser", JSON.stringify(res.data));
                    setUserAuthData(res.data);                      
                }    
        })
        .catch((error) => alert(error.response.data));
    }

    function handleLogout() {
        const isConfirmLogout = confirm('Tem certeza que deseja sair da aplicação?');
        if (isConfirmLogout) {
            localStorage.removeItem("@studentsSystem:authUser");
            setUserAuthData({});
        } 
    }

    return (
        <AuthContext.Provider value={{handleLogin, userAuthData, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}