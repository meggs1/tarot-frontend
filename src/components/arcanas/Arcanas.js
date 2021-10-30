// import React, { Component } from 'react'
import Arcana from './Arcana'


function Arcanas(props) {
    

    console.log('arcanas props', props)

    const filterSuits = (arcana_id) => {
        const suits = props.suits
        const filteredSuits = suits.filter(suit => {
            return (suit.arcana.id === arcana_id)
        })
        return filteredSuits
    }

    const filterCards = (arcana_id) => {
        const cards = props.cards
        const filteredCards = cards.filter(card => {
            return (card.arcana.id === arcana_id)
        })
        return filteredCards
    }
    
    
    return (
        <div>
            {props.arcanas.map( arcana => 
                <Arcana key={arcana.id} arcana={arcana} 
                suits={filterSuits(arcana.id)} 
                cards={filterCards(arcana.id)} 
                />
            )}
        </div>
    )
    
}

export default Arcanas