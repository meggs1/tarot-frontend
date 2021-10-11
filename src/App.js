import React, { Component } from 'react'
import Card from './components/card'

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
      <Card cards={this.state.cards} />
    )
  }
}

export default App;
