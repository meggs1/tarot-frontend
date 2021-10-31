// import React, { Component } from 'react'
import { Link } from "react-router-dom"
import CardImage from './CardImage'


function Cards(props) {

    console.log('cards props', props)
    
    return (
        <div class="row justify-content-md-center">
            {props.cards.map( card => 
                <div class="col-md-auto">
                    <Link to={{pathname: `/cards/${card.id}`}}>
                        <CardImage card={card} className="cardImage" />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Cards