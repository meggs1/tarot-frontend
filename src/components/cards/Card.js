// import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import CardImage from './CardImage'

function Card(props) {

    function cardDisplay() {
        const card = props.card
        const num = props.num
        console.log('show card', props)
        // debugger
        if (props.className === 'cardInfo') {

            return (
                <div id={card.id}  className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
                    <div class="row justify-content-center">
                        <div class="col" >
                            <img src={card.image_url ? card.image_url.url : null} alt={card.name} />
                        </div>

                        <div class="col-md-6">
                        <h1>{card.name}</h1>
                        <p><strong>{card.arcana.name} Arcana Suit of {card.suit.name}</strong></p>
                        
                        <h3>Full Meaning</h3>
                        <p>{card.full_meaning}</p>
  
                        <h3>Upright Meaning</h3>
                        <p>{card.upright_meaning}</p>

                        <h3>Reversed Meaning</h3>
                        <p>{card.reversed_meaning}</p>
                        </div>
                    </div>
                    {/* <Link to={`/cards/${card.id}`}>Show</Link> */}
                    <Link to={`/cards/${card.id}/edit`}>Edit</Link>
                </div>
            )

        } else if (num === 0 ) {
            return (
                <div class="row justify-content-md-center">
                    <h2>{card.name} Upright Meaning</h2>
                    <p>{card.upright_meaning}</p>
                </div>
            )
        } else if (num === 1) {
            return (
                <div>
                    <h2>{card.name} Reversed Meaning</h2>
                    <p>{card.reversed_meaning}</p>
                </div>
            )
        } else {
            <div>
                cant find that card
            </div>
        }
    }
    
    return (
        <div>
            {cardDisplay()}
        </div>
    )

    
}

export default Card