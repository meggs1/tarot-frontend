import React, {Component} from 'react'
import Cards from '../components/cards/Cards'

import { connect } from "react-redux";

import { editCard, fetchCards } from "../actions/cardActions"


class CardsContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchCards()
    // }

    render() {
        console.log('cards container props', this.props)
        console.log('cards container state', this.state)
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
    //   fetchCards: () => dispatch(fetchCards()),
      editCard: (card) => dispatch(editCard(card))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)
