import React, { Component } from 'react'

import CardsContainer from '../../containers/CardsContainer'

class Suit extends Component {
    
    state = {
        showCards: false
    }

    handleClick = () => {
        this.setState({ showCards: !this.state.showCards })
    }
    
    render() {
        // console.log('Suit props', this.props)
        const suit = this.props.suit
        const cards = this.props.cards
        // debugger
        return (
            <div>
                <h1> {suit.name} </h1>
                <p> {suit.description} </p>
                <button onClick={this.handleClick}>Show Cards</button>
                {this.state.showCards && <CardsContainer cards={cards} className='cardInfo' />}
            </div>
        )
    }
}

export default Suit