import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";

export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes/>
            {/* <AuthRoutes/> */}
        </BrowserRouter>
    )
}