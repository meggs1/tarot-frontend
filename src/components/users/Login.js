import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        this.props.history.push(`/`)
    }

    render() {
        console.log(this.props)
        return (
            <div >
                <div class="row justify-content-center">
                    <div class="col-md-4 p-3 bg-white text-dark bg-opacity-75">  
                        <form onSubmit={this.handleSubmit}>
                            <h1>Log in form</h1>
                            <label>Username: </label>
                            <input name="username" value={this.state.username} onChange={this.handleChange} class="form-control"/>
                            <br />
                            <label>Password: </label>
                            <input name="password" type="password"  value={this.state.password} onChange={this.handleChange} class="form-control"/>
                            <br />
                            <input type="submit" value="Log in"  class="btn btn-secondary btn-lg btn-block"/>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (user) => dispatch(login(user)),
    }
}

export default connect(null, mapDispatchToProps)(Login)
