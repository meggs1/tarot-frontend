import React, { Component } from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar exact path="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/cards" component={Card}/>
      </div>
    )
  }
}

export default App;
