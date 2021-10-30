import { Component } from "react"
import CardImage from "./CardImage"

import { connect } from 'react-redux'
// import CardsContainer from "../containers/CardsContainer"
// import { addCardsToUser } from '../../actions/usersActions'

class DrawCard extends Component {

    state = {
        showCards: false,
        drawnCards: [],

    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    handleClick = (e) => {
        if (!this.state.showCards) {
            this.getCards(e.target.value)
        }
        this.setState({showCards: !this.state.showCards})
    }

    getCards = (num) => {
        const cards = this.props.cards.cards
        const numOfCards = parseInt(num)
        const selectedCards = []

        for (var i=0; i<numOfCards; i++) {
            selectedCards.push(cards.splice(Math.random()*(cards.length-1),1).pop())
            
            localStorage.setItem('userCards', JSON.stringify(selectedCards))
            this.setState({
                drawnCards: selectedCards
            })
        }
    }

    drawCards = () => {
        const cards = this.state.drawnCards
        
            // console.log(this.state)

        return(
            <div>
                {this.state.showCards ? cards.map(card => 
                    <CardImage card={card} num={this.getRandomInt(2)}/> 
                    ) : null 
                }
            </div>
        )
    }
    
    render() {
        // console.log(localStorage)
        // console.log('DrawCard props', this.props, localStorage)

        return(
            <div>
                DrawCard Page
                <button onClick={this.handleClick} value="1">Draw one card</button>
                <button onClick={this.handleClick} value="3">Draw three cards</button>
                <button onClick={this.handleClick} value="5">Draw five cards</button>
                {this.drawCards()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        user: state.user
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addCardsToUser: (cards) => dispatch(addCardsToUser(cards))
//     }
// }

export default connect(mapStateToProps)(DrawCard)