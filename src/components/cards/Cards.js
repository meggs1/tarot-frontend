import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {

    render() {
        // console.log('cards props', this.props)
        return (
            
        <div className="card-list">
            {this.props.cards.map( card => 
                <Card card={card} key={card.id} className="cardInfo"/>
            )}
        </div>
        )
    }
}

export default Cards