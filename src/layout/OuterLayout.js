import React from "react";
import NavigationBar from "../components/NavigationBar";



const OuterLayout = ({children}) => {
    return (
        <>
        <NavigationBar/>
        {children}
        </>
    )
}
export default OuterLayout