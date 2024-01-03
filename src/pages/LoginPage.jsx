import React, { useState } from "react";
import OuterLayout from "../layout/OuterLayout";
import { useAuth } from "../context/AuthProvider";

const LoginPage = () => {
    const {logIn,setUserName,userName} = useAuth()
    return (
        <OuterLayout>
        <h1>LOGIN</h1>
        <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName}></input>
        <button onClick={logIn}>Login</button>
        </OuterLayout>
    )
}
export default LoginPage