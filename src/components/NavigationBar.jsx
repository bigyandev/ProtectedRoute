import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <Link className="navbar-brand" to="/">LOGO</Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/profile">PROFILE</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">LOGIN</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/product">PRODUCT</Link></li>
            </ul>
            </div>
        </nav>
    )
}
export default NavigationBar