import React, {Component} from 'react'
import Cards from '../components/cards/Cards'
import CardForm from '../components/cards/CardForm'
import { connect } from "react-redux";

import { editCard, fetchCards } from "../actions/cardActions"



class CardsContainer extends Component {
    componentDidMount() {
        this.props.fetchCards()
    }

    render() {
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
      fetchCards: () => dispatch(fetchCards()),
      editCard: (card) => dispatch(editCard(card))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)