import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{authenticated}}>
            {children}
        </AuthContext.Provider>
    )
}