import React, { Component } from 'react'

class Card extends Component {
    state = {
        user: this.props.user,
        cards: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/cards')
        .then(resp => resp.json())
        .then(data => this.setState({cards: data}))
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.props)
        return (
        <div>
            {this.state.cards.map(card =>
                <div id={card.id}>
                    <h1>{card.name}</h1>
                    <img src={card.image_url.url} />
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