import React, { Component } from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {

  state = {
    cards: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(data => this.setState({cards: data}))
    .catch(err => console.log(err))
  }
 
  render() {

    return (
      <div>
        <NavBar exact path="/" />
        <Route exact path="/" component={Home} />
        <Route path='/cards' render={routerProps => <Card {...routerProps} cards={this.state.cards}/>} />
      </div>
    )
  }
}

export default App;
