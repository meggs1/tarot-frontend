import React, { Component } from 'react'

class Card extends Component {
    render() {
        // console.log('card', this.props)
        const card = this.props.card
        return (
            
        <div>
            card

                <div id={card.id}>
                    <h1>{card.name}</h1>
                    <img src={card.image_url.url} alt={card.name}/>
                    <h3>Arcana</h3>
                    <p>{card.acrana}</p>
                    <h3>Full Meaning</h3>
                    <p>{card.full_meaning}</p>
                    <h3>Upright Meaning</h3>
                    <p>{card.upright_meaning}</p>
                    <h3>Reversed Meaning</h3>
                    <p>{card.reversed_meaning}</p>
                </div>
            
        </div>
        )
    }
}

export default Card