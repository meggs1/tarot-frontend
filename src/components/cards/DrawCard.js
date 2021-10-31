import { Component } from "react"
import CardImage from "./CardImage"

import { connect } from 'react-redux'
// import CardsContainer from "../containers/CardsContainer"
// import { addCardsToUser } from '../../actions/usersActions'

class DrawCard extends Component {

    state = {
        showCards: false,
        drawnCards: []
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
        return(
        
            <div class="row">
                {this.state.showCards ? cards.map(card => 
                    <div class="col">
                    <CardImage card={card} num={this.getRandomInt(2)} className="drawCard"/> 
                    </div>
                    ) : null 
                }
            </div>
            
        )
    }
    
    render() {
        // console.log(localStorage)
        // console.log('DrawCard props', this.props, localStorage)

        return(
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-auto ">
                        <button onClick={this.handleClick} value="1" class="btn btn-dark btn-lg">Draw one card</button>
                        
                        <button onClick={this.handleClick} value="3" class="btn btn-dark btn-lg">Draw three cards</button>

                        <button onClick={this.handleClick} value="5" class="btn btn-dark btn-lg">Draw five cards</button>
                    </div>
                </div>
                <div class="container">
                    {this.drawCards()}
                </div>
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