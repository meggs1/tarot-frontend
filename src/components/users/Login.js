import React, { Component } from 'react'
import { login } from "../../actions/usersActions"

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Log in form</h1>
                <label>Username: </label>
                <input name="username" value={this.state.username} onChange={this.handleChange}/>
                <br />
                <label>Password: </label>
                <input name="password" type="password"  value={this.state.password} onChange={this.handleChange}/>
                <br />
                <input type="submit" value="Log in"/>
            </form>
        )
    }
}

export default Login
