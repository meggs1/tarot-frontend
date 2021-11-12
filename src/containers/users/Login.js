import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from "../../actions/userActions"
import LoginForm from '../../components/users/LoginForm'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    render() {
        if (this.props.user.loggedIn === true) {
            return <Redirect push to={'/'}/> 
        } else {
            return <LoginForm login={this.props.login} user={this.props.user} />
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
