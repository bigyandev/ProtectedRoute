import React, { useState } from "react";

const HOC = (OriginalComponent) => {
 const NewComponent = () => {
    const [userName,setUserName] = useState("")
    
    const logIn = (e) => {
        e.preventDefault()
        console.log(userName)
        setUserName((prevName) => prevName)
    }
    const logOut  = () => {
        setUserName(() => "")
    }
    return <OriginalComponent userName={userName} setUserName={setUserName} logIn ={logIn} logOut={logOut}/>
 }
 return NewComponent
}
export default HOC