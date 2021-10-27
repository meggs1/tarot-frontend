import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from "../../actions/usersActions"

class SignUp extends Component {

    state = {
        name: '',
        username: '',
        password: '',

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.signUp(this.state)
        const name = this.state.name
        const username = this.state.username
        const password = this.state.password
        // console.log(this.state)
        this.props.signUp({ name, username, password })
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign up form</h1>
                <label>Name: </label>
                <input name="name" value={this.state.name} onChange={this.handleChange}/>
                <br />
                <label>Username: </label>
                <input name="username" value={this.state.username} onChange={this.handleChange}/>
                <br />
                <label>Password: </label>
                <input name="password" type="password"  value={this.state.password} onChange={this.handleChange}/>
                <br />
                <input type="submit" value="Sign up"/>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (user) => dispatch(signUp(user))
    };
  }

export default connect(null, mapDispatchToProps)(SignUp)