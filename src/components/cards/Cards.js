import React, { Component } from 'react'
import CardImage from './CardImage'

function Cards(props) {


    // console.log('cards props', this.props)
    return (
        <div className="card-list">
            {props.cards.map( card => 
                <CardImage card={card} key={card.id} className="cardImage" />
            )}
            
        </div>
    )
}

export default Cards