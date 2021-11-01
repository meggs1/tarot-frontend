import React, { Component } from 'react'

import CardsContainer from '../../containers/CardsContainer'
// import Cards from '../cards/Cards'

class Suit extends Component {
    
    state = {
        showCards: false
    }

    handleClick = () => {
        this.setState({ showCards: !this.state.showCards })
    }
    
    render() {
        console.log('Suit props', this.props)
        const suit = this.props.suit
        const suitCards = this.props.cards
        return (
            <div>
                <h1> {suit.name} </h1>
                <p> {suit.description} </p>
                <button onClick={this.handleClick}>Show Cards</button>
                                {this.state.showCards && <CardsContainer suitCards={suitCards} className='suitCards' />}
                {/* {this.state.showCards && <CardsContainer suitCards={cards} className='suitCards' />} */}
            </div>
        )
    }
}

export default Suit