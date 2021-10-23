import React, { Component } from 'react'

import Cards from '../cards/Cards'

class Suit extends Component {

    state = {
        showCards: false
    }

    hideComponent() {
        this.setState({ showCards: !this.state.showCards });
    }
    
    render() {
        console.log('Suit props', this.props)
        const suit = this.props.suit
        const cards = this.props.cards
        return (
            <div>
                <h1> {suit.name} </h1>
                <p> {suit.description} </p>
                {this.state.showCards && <Cards cards={cards} />}
                <button onClick={() => this.hideComponent("showCards")}>Show Cards</button>
            </div>
        )
    }
}

export default Suit