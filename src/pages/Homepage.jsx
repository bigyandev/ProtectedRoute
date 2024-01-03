import React from "react";
import OuterLayout from "../layout/OuterLayout";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";


const HomePage = () => {
    const {userName,logOut,logIn} = useAuth()
    console.log(userName)
    return (
        <OuterLayout>
        <h1>HOME</h1>
        <h3>{userName ? `welcome ${userName}` : "welcome"}</h3>
        {userName ? <button onClick={logOut}>sign out</button>: <button><Link to="/login"> log in</Link></button>}
        </OuterLayout>
    )
}
export default HomePage