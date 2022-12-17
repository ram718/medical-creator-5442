import {useState,createContext} from "react";

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [isAuth,setIsAuth] = useState(false);

    const loginUser = () => {
        setIsAuth(true);
    }

    const logoutUser = () => {
        setIsAuth(false);
    }

    return <AuthContext.Provider value={{isAuth,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;