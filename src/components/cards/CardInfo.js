// import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import CardImage from './CardImage'

const CardInfo = (props) => {

    function displayCardInfo() {
        const card = props.card
        const num = props.num

        if (num === 0 ) {
            return (
                <div class="card-text">
                    <h3 class="text-center">{card.name} Upright</h3>
                    <p>{card.upright_meaning}</p>
                </div>
            )

        } else if (num === 1) {
            return (
                <div class="card-text">
                    <h3 class="text-center">{card.name} Reversed Meaning</h3>
                    <p>{card.reversed_meaning}</p>
                </div>
            )
        } 
    }
    
    return (
        <div class="row-md-auto">
            {displayCardInfo()}
        </div>
    )

    
}

export default CardInfo