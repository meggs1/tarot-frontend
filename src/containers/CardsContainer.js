import React, {Component} from 'react'
import CardImage from '../components/cards/CardImage'
import { Link } from "react-router-dom"
import { connect } from "react-redux";

import { fetchCards, editCard } from "../actions/cardActions"


class CardsContainer extends Component {

  componentDidUpdate() {
    this.props.fetchCards()
  }

  render() {
      console.log('cards container props', this.props)
      return(
        <div class="container p-3 mb-2 bg-white text-dark bg-opacity-75">
          <div class="row justify-content-md-center">
              {this.props.cards.cards.map( card => 
                <div class="col-md-auto">
                    <Link to={{pathname: `/cards/${card.id}`}}>
                        <CardImage card={card} className="cardImage" />
                    </Link>
                </div>
              )}
          </div>
        </div>
      )
      
  }

}

const mapStateToProps = (state) => {
    return {
      cards: state.cards
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
