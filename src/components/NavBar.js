import React from "react";
import { NavLink } from "react-router-dom"

const NavBar = (props) => {
    // console.log('navBar' + props.user)
    return(
        <div className="nav-bar">
            <div>
                <div>
                    {/* {props.user.username ? <p>Welcome {props.user.name}</p> : ( */}
                    <div>                
                        <NavLink to="/signup">Sign Up</NavLink>
                        <br />
                        <NavLink to="/login">Login</NavLink>
                    </div>
                {/* )} */}
            </div>
            <NavLink to="/">Home</NavLink>
            <br />
            <NavLink to="/cards">Cards</NavLink>
            <br />
            <NavLink to="/arcanas">Arcanas</NavLink>
            <br />
            <NavLink to="/suits">Suits</NavLink>
        </div>
        </div>
    )
}

export default NavBar