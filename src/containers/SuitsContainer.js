import React, {Component} from 'react'

import { connect } from "react-redux";
import { fetchSuits } from '../actions/suitActions';
import Suit from '../components/suits/Suit'

class SuitsContainer extends Component {
    componentDidMount() {
        this.props.fetchSuits()
    }

    filterCards = (suit_id) => {
        const cards = this.props.cards.cards
        const filteredCards = cards.filter(card => {
            return (card.suit.id === suit_id)
        })
        return filteredCards
    }
    
    render() {
        console.log('suits contaianer props', this.props)
        return(
            <div className="container p-4 mb-2">
                {this.props.suits.suits.map( suit => 
                    <Suit key={suit.id} suit={suit} cards={this.filterCards(suit.id)}/>
                )}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        suits: state.suits,
        cards: state.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchSuits: () => dispatch(fetchSuits())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SuitsContainer)