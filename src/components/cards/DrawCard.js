import { Component } from "react"
import CardImage from "./CardImage"

import { connect } from 'react-redux'
// import CardsContainer from "../containers/CardsContainer"

class DrawCard extends Component {

    state = {
        showCards: false,
        drawnCards: []
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    handleClick = (e) => {
        this.setState({showCards: !this.state.showCards})
        if (this.state.showCards === true ) {
            this.getCards(e.target.value)
        }
    }

    getCards = (num) => {
        const cards = this.props.cards.cards
        const numOfCards = parseInt(num)

        const selectedCards = []
        const currentUserCards = this.props.user.currentUser.user.card_ids
        console.log('current user cards', currentUserCards)

        // for (var i = 0; i < numOfCards; i++) {
        //     selectedCards.push(cards[Math.floor(Math.random()*cards.length)]);
        // }

        for (var i = 0; i < numOfCards; i++) {
            var idx = Math.floor(Math.random() * cards.length)
            selectedCards.push(cards[idx])
            currentUserCards.push(cards[idx])
            cards.splice(idx, 1)
          }
        
        this.setState({drawnCards: selectedCards})

    }

    drawCards = () => {
        const cards = this.state.drawnCards
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

export default connect(mapStateToProps)(DrawCard)