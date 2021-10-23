import React, { Component } from 'react'

import Cards from '../cards/Cards'

class Suit extends Component {
    
    render() {
        console.log('Suit props', this.props)
        const suit = this.props.suit
        const cards = this.props.cards
        return (
            <div>
                <h1> {suit.name} </h1>
                <Cards cards={cards} />
            </div>
        )
    }
}

export default Suit