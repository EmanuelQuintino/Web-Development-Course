import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";

export function Routes() {
    const isAuthenticated = false;
    return (
        <BrowserRouter>
            { isAuthenticated ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}