import { Component } from "react"

class LoginForm extends Component {
    state = {
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
        this.props.login(this.state)
    }

    logInForm = () => {
        return (    
            <div >
                <div className="row justify-content-center">
                    <div className="col-md-4 p-3 bg-white text-dark bg-opacity-75">  
                        <form onSubmit={this.handleSubmit}>
                            <h1>Log in form</h1>
                            <label>Username: </label>
                            <input name="username" value={this.state.username} onChange={this.handleChange} className="form-control"/>
                            <br />
                            <label>Password: </label>
                            <input name="password" type="password"  value={this.state.password} onChange={this.handleChange} className="form-control"/>
                            <br />
                            <input type="submit" value="Log in"  className="btn btn-secondary btn-lg btn-block"/>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }

    render() {
        return this.logInForm()
    }
}

export default LoginForm