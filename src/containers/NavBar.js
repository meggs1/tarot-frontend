import React from "react";
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import { Component } from 'react'
import { checkAuth, logout } from '../actions/userActions'

class NavBar extends Component{

    componentDidMount() {
        this.props.checkAuth()
    }

    toggleUserLinks() {
        const loggedIn = this.props.user.loggedIn
        return loggedIn ? (   
            <>
                <Link to="/profile" className="nav-link active">Profile</Link>
                <Link to="/logout" onClick={this.props.logout} className="nav-link active">Logout</Link>
            </>
        ) : (
            <>
                <Link to="/signup" className="nav-link active">Sign Up</Link>
                <Link to="/login" className="nav-link active">Login</Link>
            </>
        ) 
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 ">
                            <Link to="/" className="nav-link active">Home</Link>
                            <Link to="/cards" className="nav-link active">Cards</Link>
                            <Link to="/suits" className="nav-link active">Suits</Link>
                        </ul>
                    </div>
                    <div className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <ul className="navbar-nav mr-auto">
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
    }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth: () => dispatch(checkAuth()),
        logout: () => dispatch(logout())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)