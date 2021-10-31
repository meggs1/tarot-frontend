import React, { Component } from 'react'
import { Link } from "react-router-dom"
import CardImage from './CardImage'
import { connect } from 'react-redux'
import { fetchCards } from '../../actions/cardActions'


class Cards extends Component {

    componentDidMount() {
        this.props.fetchCards()
    }
    
    render() {
        console.log('cards props', this.props)
        return (
            <div class="row justify-content-md-center">
                {this.props.cards.map( card => 
                    <div class="col-md-auto">
                        <Link to={{pathname: `/cards/${card.id}`}}>
                            <CardImage card={card} className="cardImage" />
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}

// mapStateToProps = (state) => {
//     return {
//         cards: state.cards
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCards: () => dispatch(fetchCards()),
    //   editCard: (card) => dispatch(editCard(card))
    }
  }

export default connect(null, mapDispatchToProps)(Cards)