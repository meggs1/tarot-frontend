import React from "react";
import { NavLink } from "react-router-dom"

const NavBar = () => {
    console.log()
    return(
        <div className="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cards">Cards</NavLink>
        </div>
    )
}

export default NavBar