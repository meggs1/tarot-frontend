// import React, { Component } from 'react'

import Suit from './Suit'

function Suits(props) {
    

    // console.log('suits props', props)
        // console.log('suits state', state)

    const filterCards = (suit_id) => {
        const cards = props.cards
        const filteredCards = cards.filter(card => {
            return (card.suit.id === suit_id)
        })
        return filteredCards
    }
    
    return (
            
        <div>
            <div>
                {props.suits.map( suit => 
                    <Suit key={suit.id} suit={suit} cards={filterCards(suit.id)}/>
                )}
            </div>
        </div>
    )
    
}

export default Suits