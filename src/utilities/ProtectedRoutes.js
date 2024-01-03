import React from "react"
import { Outlet,Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

const ProtectedRoutes = () => {
 const {userName} = useAuth()
  return (
    <>
    {userName ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}
export default ProtectedRoutes