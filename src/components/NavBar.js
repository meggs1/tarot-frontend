import React from "react";
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import { Component } from 'react'
import { checkAuth } from '../actions/usersActions'
import { logout } from '../actions/usersActions'

class NavBar extends Component{

    componentDidMount() {
        this.props.checkAuth()
    }

    toggleUserLinks() {
        const loggedIn = this.props.user.loggedIn

        return loggedIn ? (   
            <>
                <Link to="/profile" class="nav-link active">Profile</Link>
                <Link to="/logout" onClick={this.props.logout} class="nav-link active">Logout</Link>
            </>
        ) : (
            <>
                <Link to="/signup" class="nav-link active">Sign Up</Link>
                <Link to="/login" class="nav-link active">Login</Link>
            </>
        )
        
    }

    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto mb-2 ">
                            <Link to="/" class="nav-link active">Home</Link>
                            <Link to="/cards" class="nav-link active">Cards</Link>
                            <Link to="/arcanas" class="nav-link active">Arcanas</Link>
                            <Link to="/suits" class="nav-link active">Suits</Link>
                        </ul>
                    </div>
                    <div class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <ul class="navbar-nav mr-auto">
                                {this.toggleUserLinks()}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth: () => dispatch(checkAuth()),
        logout: () => dispatch(logout())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)