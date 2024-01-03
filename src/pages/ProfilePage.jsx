import React from "react";
import { Link } from "react-router-dom";
import OuterLayout from "../layout/OuterLayout";
import { useAuth } from "../context/AuthProvider";

const ProfilePage = () => {
    const {userName,logIn,logOut} = useAuth()
    return (
        <OuterLayout>
        <h1>welcome {userName}</h1>
        {userName ? <button onClick={logOut}>sign out</button>: <button><Link to="/login"> log in</Link></button>}
        </OuterLayout>
    )
}
export default ProfilePage