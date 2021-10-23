import React, { Component } from 'react'

import Suit from './Suit'

class Suits extends Component {

    render() {
        console.log('suits props', this.props)
        return (
            
        <div>
            <div>
                {this.props.suits.map( suit => 
                    <Suit key={suit.id} suit={suit} cards={this.props.cards.filter(card => card.suit.id === suit.id)}/>
                )}
            </div>
        </div>
        )
    }
}

export default Suits