import React, { Component } from 'react'
import { Link } from "react-router-dom"
import CardDisplay from './CardImage'

class Card extends Component {

    render() {
        // console.log('card props', this.props)

        const card = this.props.card
        // console.log('card', card)

        return (
        <div>
            <div id={card.id}>
                <h1>{card.name}</h1>
                <CardDisplay  card={card}/>
                {/* <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" /> */}
                <br />
                <p><strong>{card.arcana.name} Arcana</strong></p>
                <p><strong>Suit: {card.suit.name}</strong></p>
                
                <h3>Full Meaning</h3>
                <p>{card.full_meaning}</p>
                <h3>Upright Meaning</h3>
                <p>{card.upright_meaning}</p>
                <h3>Reversed Meaning</h3>
                <p>{card.reversed_meaning}</p>
                <Link to={`/cards/${card.id}`}>Show</Link>
                <Link to={`/cards/${card.id}/edit`}>Edit</Link>
            </div>
        </div>
        )
    }
}

export default Card