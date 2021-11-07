import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from "../../actions/usersActions"

class SignUpForm extends Component {

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
        const name = this.state.name
        const username = this.state.username
        const password = this.state.password

        this.props.signUp({ name, username, password })
    }

    signUpForm = () => {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4 p-3 bg-white text-dark bg-opacity-7">  
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign Up</h1>
                        <label>Name: </label>
                        <input name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
                        <br />
                        <label>Username: </label>
                        <input name="username" value={this.state.username} onChange={this.handleChange} className="form-control"/>
                        <br />
                        <label>Password: </label>
                        <input name="password" type="password"  value={this.state.password} onChange={this.handleChange} className="form-control"/>
                        <br />
                        <input type="submit" value="Sign Up" className="btn btn-secondary btn-lg btn-block"/>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        console.log(this.props)
        return this.signUpForm()
    }
}

export default SignUpForm