// import React, { Component } from 'react'
import CardImage from './CardImage'

function Cards(props) {


    // console.log('cards props', props)
    return (
        <div class="row">
                {props.cards.map( card => 
                <div class="col-md-auto">
                    <CardImage card={card} key={card.id} className="cardImage" />
                </div>
                )}
                
            </div>
        
    )
}

export default Cards