import React, { Component } from 'react'
import Card from './Card'
import CardImage from './CardImage'

class Cards extends Component {

    render() {
        // console.log('cards props', this.props)
        return (
            
        <div className="card-list">
            {this.props.cards.map( card => 
                <CardImage card={card} key={card.id} className="cardImage" />
            )}
        </div>
        )
    }
}

export default Cards