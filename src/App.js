import React, { Component } from 'react'

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
    console.log(this.state)
    return (
      <div>
        {this.state.cards.map(card =>
          <div>
            <h1>{card.name}</h1>
            <img src={card.image_url.url} />
          </div>
          )}
      </div>
    )
  }
}

export default App;
