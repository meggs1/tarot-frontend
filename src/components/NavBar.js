import React from "react";
import { NavLink } from "react-router-dom"

const NavBar = (props) => {
    console.log('navBar' + props.user)
    return(
        <div className="nav-bar">
            <div>
                
                <NavLink to="/">Home</NavLink>
                <br />
                <div>
                    {props.user.username ? <h1>Welcome {props.user.name}</h1> : (
                <div>                
                <NavLink to="/signup">Sign Up</NavLink>
                <br />
                <NavLink to="/login">Login</NavLink>
          </div>
        )
        }
        </div>

                <br />
                <NavLink to="/cards">Cards</NavLink>

            </div>
        </div>
    )
}

export default NavBar