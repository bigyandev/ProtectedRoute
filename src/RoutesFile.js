import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import ProtectedRoutes from "./utilities/ProtectedRoutes";

const RoutesFile = () => {
    return (
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<ProfilePage/>} />
        </Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        </Routes>
    )
}
export default RoutesFile