import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        name: '',
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
        this.props.signUp(this.state)
        console.log(this.state)
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

export default SignUp