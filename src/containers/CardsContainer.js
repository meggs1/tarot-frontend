import React, {Component} from 'react'
import Cards from '../components/cards/Cards'

// import { connect } from "react-redux";

// import { fetchCards, editCard } from "../actions/cardActions"


class CardsContainer extends Component {

  render() {
      console.log('cards container props', this.props)
      return(
          <div>
              <Cards cards={this.props.cards} />
          </div>
      )
  }

}

// const mapStateToProps = (state) => {
//     return {
//       cards: state.cards
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       fetchCards: () => dispatch(fetchCards()),
//       editCard: (card) => dispatch(editCard(card))
//     }
//   }

export default CardsContainer

// export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)
