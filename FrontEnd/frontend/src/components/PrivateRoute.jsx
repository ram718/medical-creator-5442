import {useContext} from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
      return <Navigate to="/login"></Navigate>
    }
    return children;
}

export default PrivateRoute