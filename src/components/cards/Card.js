// import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import CardImage from './CardImage'

function Card(props) {
    // console.log(props)

    function cardDisplay() {
        const card = props.card
        const num = props.num

        console.log('show card', props)

        if (props.className === 'cardInfo') {
            return (
                <div id={card.id} class="card">
                    <h1>{card.name}</h1>
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
            
            )
        } else if (num === 0 ) {
            return (
                <div>
                    {/* <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" /> */}
                    <h2>{card.name} Upright Meaning</h2>
                    <p>{card.upright_meaning}</p>
                </div>
            )
        } else if (num === 1) {
            return (
                <div>
                    {/* <img className="image_reversed" src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" /> */}
                    <h2>{card.name} Reversed Meaning</h2>
                    <p>{card.reversed_meaning}</p>
                </div>
            )
        }
    }
    
    return (
        <div>
            {cardDisplay()}
        </div>
    )

    
}

export default Card