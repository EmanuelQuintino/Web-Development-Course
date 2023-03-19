import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";
import { useContext } from 'react';
import { AuthContext } from "../context/Auth";

export function Routes() {
    const {userAuthData} = useContext(AuthContext);
    return (
        <BrowserRouter>
            { userAuthData.authenticated ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}