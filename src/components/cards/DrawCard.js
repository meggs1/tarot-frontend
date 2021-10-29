import { Component } from "react"
import CardImage from "./CardImage"

import { connect } from 'react-redux'
// import CardsContainer from "../containers/CardsContainer"
import { addCardsToUser } from '../../actions/usersActions'

class DrawCard extends Component {

    state = {
        showCards: false,
        drawnCards: [],
        currentUserCards: []
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




        // for (var i = 0; i < numOfCards; i++) {
        //     selectedCards.push(cards[Math.floor(Math.random()*cards.length)]);
        // }

        for (var i = 0; i < numOfCards; i++) {
            var idx = Math.floor(Math.random() * cards.length)
            selectedCards.push(cards[idx])
            if (this.props.user.authChecked) {
                const userCards = this.props.user.currentUser.card_ids
                console.log('current user cards', userCards)
            
                userCards.push(cards[idx])
                this.props.addCardsToUser(userCards)
            }
            cards.splice(idx, 1)
          }
        
        this.setState({drawnCards: selectedCards})

    }

    drawCards = () => {
        const cards = this.state.drawnCards
        console.log(this.state.drawnCards)
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
        console.log('DrawCard props', this.props)

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

const mapDispatchToProps = (dispatch) => {
    return {
        addCardsToUser: (card) => dispatch(addCardsToUser(card))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawCard)