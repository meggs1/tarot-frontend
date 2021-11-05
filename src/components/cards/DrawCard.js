import { Component } from "react"
import Card from "./Card"

import { connect } from 'react-redux'
import { fetchCards } from "../../actions/cardActions"

class DrawCard extends Component {

    state = {
        showCards: false,
        showCardInfo: false,
        drawnCards: [],

    }

    handleClick = (e) => {
        if (!this.state.showCards) {
            this.getCards(e.target.value)
        }
        this.setState({showCards: !this.state.showCards})
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    getCards = (num) => {
        const cards = this.props.cards.cards
        const slicedCards = cards.slice()
        const numOfCards = parseInt(num)
        const selectedCards = []

        for (let i=0; i<numOfCards; i++) {
            selectedCards.push(slicedCards.splice(Math.random() * (slicedCards.length-1) ,1).pop())
            
            localStorage.setItem('userCards', JSON.stringify(selectedCards))
            this.setState({
                drawnCards: selectedCards
            })
        }
    }

    drawCards = () => {
        const cards = this.state.drawnCards
        return(
            <>
                {this.state.showCards ? cards.map(card => 
                    <div class="col  p-3">
                        <Card card={card} num={this.getRandomInt(2)} className="drawnCard"/> 
                    </div> ) : null 
                }
            </>
        )
    }
    
    render() {
        return(
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <button onClick={this.handleClick} value="1" class="btn btn-dark btn-lg button-space">Draw one card</button>
                        <button onClick={this.handleClick} value="3" class="btn btn-dark btn-lg button-space">Draw three cards</button>
                        <button onClick={this.handleClick} value="5" class="btn btn-dark btn-lg button-space">Draw five cards</button>
                    </div>
                </div>
                <div class="row justify-content-md-center">
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCards: () => dispatch(fetchCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawCard)