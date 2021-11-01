import React, {Component} from 'react'
import CardImage from '../components/cards/CardImage'
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

    console.log('cards container props', this.props)
    if (suitCards) {
      return(
        <div class="row justify-content-md-center">
          {suitCards.map( card => 
            <div class="col-md-auto">
                <Link to={{pathname: `/cards/${card.id}`}}>
                  <CardImage card={card} className="cardImage" />
                </Link>
            </div>
          )}
        </div>
      )

    } else if (userCards) {
      return (
        <div>
          <div class="row justify-content-md-center">
            {userCards.map( card => 
              <div class="col-md-auto">
                  <Link to={{pathname: `/cards/${card.id}`}}>
                    <CardImage card={card} className="cardImage" />
                  </Link>
              </div>
            )}
          </div>
        </div>
      )
    } else {
      return(
        <div class="row justify-content-md-center">
          {cards.map( card => 
            <div class="col-md-auto">
                <Link to={{pathname: `/cards/${card.id}`}}>
                  <CardImage card={card} className="cardImage" />
                </Link>
            </div>
          )}
        </div>
      )
        
  } }

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
