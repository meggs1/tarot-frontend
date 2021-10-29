// import React, { Component } from 'react'
import Arcana from './Arcana'


function Arcanas(props) {
    

        console.log('arcanas props', props)
    return (
        <div>
            {props.arcanas.map( arcana => 
                <Arcana key={arcana.id} arcana={arcana} 
                suits={props.suits.filter(suit => suit.arcana.id === arcana.id)} 
                cards={props.cards}
                />
            )}
        </div>
    )
    
}

export default Arcanas