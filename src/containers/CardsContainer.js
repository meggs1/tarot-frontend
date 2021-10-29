import React, {Component} from 'react'
import Cards from '../components/cards/Cards'

import { connect } from "react-redux";

import { editCard } from "../actions/cardActions"


class CardsContainer extends Component {

    render() {
        console.log('cards container props', this.props)
        return(
            <div>
                <Cards cards={this.props.cards.cards} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      cards: state.cards,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      editCard: (card) => dispatch(editCard(card))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)
