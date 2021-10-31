// import React, { Component } from 'react'
import CardImage from './CardImage'
import { Link } from "react-router-dom"

function Cards(props) {


    // console.log('cards props', props)
    return (
        <div class="row justify-content-md-center">
                {props.cards.map( card => 
                <div class="col-md-auto">
                    <Link to={`/cards/${card.id}`}>
                        <CardImage card={card} key={card.id} className="cardImage" />
                    </Link>
                </div>
                )}
                
            </div>
        
    )
}

export default Cards