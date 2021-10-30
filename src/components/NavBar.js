import React from "react";
import { NavLink } from "react-router-dom"

const NavBar = (props) => {
    // console.log('navBar' + props.user)
    return(
        <div class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to="/" class="nav-link active">Home </NavLink>
                    </li>
                        {/* {props.user.username ? <p>Welcome {props.user.name}</p> : ( */}
                        <li class="nav-item">       
                            <NavLink to="/signup" class="nav-link active">Sign Up </NavLink>

                        </li>
                        
                        <li class="nav-item">
                            <NavLink to="/login" class="nav-link active">Login </NavLink>
                        </li>
                    {/* )} */}

                    <li class="nav-item">
                        <NavLink to="/cards" class="nav-link active">Cards </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/arcanas" class="nav-link active">Arcanas </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/suits" class="nav-link active">Suits </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink to="/profile" class="nav-link active">Profile </NavLink>
                    </li> 
                </ul>
            </div>
        </div>
    )
}

export default NavBar