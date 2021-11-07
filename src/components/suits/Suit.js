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
        const suit = this.props.suit
        const cards = this.props.cards
        return (
            <div>
                <div className="container p-4 mb-2 text-dark">
                    <h1> {suit.name} </h1>
                    <p> {suit.description} </p>
                    <button onClick={this.handleClick} className="btn btn-secondary btn-lg btn-block ">Show Cards</button>
                </div>
                <div>
                    {this.state.showCards && <Cards cards={cards} />}
                </div>
            </div>
        )
    }
}

export default Suit