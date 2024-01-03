import React,{createContext, useContext,useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext("")

export const AuthProvider = ({children}) => {
 const [userName,setUserName] = useState("")
 const navigate = useNavigate()
 const logIn = (e) => {
    navigate("/")
}
const logOut  = (e) => {
    setUserName("")
}
return <AuthContext.Provider value={{userName,setUserName,logIn,logOut}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}