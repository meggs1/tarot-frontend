import React, { Component } from 'react'

class Card extends Component {
    // need to start redux to get this to be a stateless function.
    state = {
        cards: []
    }

    render() {
        return (
        <div>
            {this.state.cards.map(card =>
                <div id={card.id}>
                    <h1>{card.name}</h1>
                    <img src={card.image_url.url} alt={card.name}/>
                    <h3>Full Meaning</h3>
                    <p>{card.full_meaning}</p>
                    <h3>Upright Meaning</h3>
                    <p>{card.upright_meaning}</p>
                    <h3>Reversed Meaning</h3>
                    <p>{card.reversed_meaning}</p>
                </div>
            )}
        </div>
        )
    }
}

export default Card