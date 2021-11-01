import React, {Component} from 'react'
import Cards from '../components/cards/Cards'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import Spinner from '../components/Spinner'
import { fetchCards, editCard } from "../actions/cardActions"

class CardsContainer extends Component {
  componentDidMount() {
    this.props.fetchCards()
  }
  
  render() {
    const cards = this.props.cards.cards
    const suitCards = this.props.suitCards
    const userCards = this.props.userCards

    if (!!this.props.loading) {
      return <Spinner />
    }

    // console.log('cards container props', this.props)
    if (suitCards) {
      return(
        <div class="row justify-content-md-center">
          <Cards cards={suitCards} />
        </div>
      )
    } else if (cards) {
       console.log(cards)
      //  debugger
      return(
        <div class="row justify-content-md-center">
          <Cards cards={cards} />
        </div>
      )  
    }
  }
} 



const mapStateToProps = (state) => {
    return {
      cards: state.cards,
      loading: state.cards.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCards: () => dispatch(fetchCards()),
      editCard: (card) => dispatch(editCard(card))
    }
  }

// export default CardsContainer

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)
