import React, { Component } from 'react'
import cardsReducer from '../../reducers/cardsReducer'

import Card from '../cards/Card'

class Arcana extends Component {
    
    render() {
        console.log('arcana props', this.props)
        const arcana = this.props.arcana
        const cards = this.props.cards
        return (
            <div>
                <h1> {arcana.name} </h1>
                <p> {cards.map(card => <Card card={card} />)} </p>
            </div>
        )
    }
}

export default Arcana