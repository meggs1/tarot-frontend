import React, { Component } from 'react'

import Cards from '../cards/Cards'

class Suit extends Component {

    state = {
        showCards: false
    }

    handleClick = () => {
        this.setState({ showCards: !this.state.showCards })
    }
    
    render() {
        // csole.log('Suit props', this.props)
        const suit = this.props.suit
        const cards = this.props.cards
        return (
            <div>
                <h1> {suit.name} </h1>
                <p> {suit.description} </p>
                {this.state.showCards && <Cards cards={cards} className='cardInfo' />}
                <button onClick={this.handleClick}>Show Cards</button>
            </div>
        )
    }
}

export default Suit