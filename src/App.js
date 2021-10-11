import React, { Component } from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/SignUp'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {

  state = {
    user: {},
    cards: []
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
    .then(user => this.setState({user: user.user}))
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(data => this.setState({cards: data}))
    .catch(err => console.log(err))
  }
 
  render() {
    console.log(this.state)
    return (
      <div>
        <NavBar exact path="/" />
        <Route exact path="/" component={Home} />
        <Route path="/signup" render={routerProps => <SignUp {...routerProps} signUp={this.signUp}/> } />
        <Route path='/cards' render={routerProps => <Card {...routerProps} cards={this.state.cards}/> } />
      </div>
    )
  }
}

export default App;
