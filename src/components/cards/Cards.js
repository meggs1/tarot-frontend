import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
    render() {
        console.log('cards', this.props.cards)
        // debugger
        return (
        <div>
            {this.props.cards.map( card => 
                <Card card={card} />
            )}
        </div>
        )
    }
}

export default Cards