import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}){
    const [usuario, setUsuario] = useState({});
    const [logado, setLogado] = useState(false);

    const login = ()  => {
        // chama o API da bacnend
        setUsuario({nome: "Kauan"});
        setLogado(true);
    }

    const logout = () => {
        setUsuario({});
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{logado, usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export { AuthProvider };