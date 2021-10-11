import React from "react";
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="nav-bar">
            <div>
                <NavLink to="/">Home</NavLink>
                <br />
                <NavLink to="/signup">Sign Up</NavLink>
                <br />
                <NavLink to="/cards">Cards</NavLink>
            </div>
        </div>
    )
}

export default NavBar