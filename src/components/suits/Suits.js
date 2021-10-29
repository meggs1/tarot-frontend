// import React, { Component } from 'react'

import Suit from './Suit'

function Suits(props) {


        console.log('suits props', props)
        // console.log('suits state', state)
    return (
            
        <div>
            <div>
                {props.suits.map( suit => 
                    <Suit key={suit.id} suit={suit} cards={props.cards.filter(card => card.suit.id === suit.id)}/>
                )}
            </div>
        </div>
    )
    
}

export default Suits