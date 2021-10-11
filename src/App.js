import React, { Component } from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {

  state = {
    user: {}
  }

  signUp = (user) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: user.name,
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp => resp.json())
    .then(result => {
      if (result.jwt) {
        localStorage.setItem('token', result.jwt)
        
        this.setState({
          user: result.user
        })
      } else {
        console.log(result)
      }
    })
  }

  login = (user) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp => resp.json())
    .then(result => {
      if (result.jwt) {
        localStorage.setItem('token', result.jwt)
        this.setState({
          user: result.user
        })
      } else {
        console.log(result)
      }
    })
  }

 
  render() {
    console.log(this.state)
    return (
      <div>
        <NavBar exact path="/" user={this.state.user}/>
        <Route exact path="/" component={Home} />
        <Route path="/signup" render={routerProps => <SignUp {...routerProps} signUp={this.signUp}/> } />
        <Route path="/login" render={routerProps => <Login {...routerProps} login={this.login}/> } />
        <Route path='/cards' render={routerProps => <Card {...routerProps} user={this.state.user}/> } />
      </div>
    )
  }
}

export default App;
