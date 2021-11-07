import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from "../../actions/usersActions"
import SignUpForm from '../../components/users/SignUpForm'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    render() {
        if (this.props.user.loggedIn === true) {
            return <Redirect push to={'/'}/> 
        } else {
            return <SignUpForm signUp={this.props.signUp} user={this.props.user} />
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
      signUp: (user) => dispatch(signUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)