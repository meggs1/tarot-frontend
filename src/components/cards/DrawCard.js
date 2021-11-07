import { Component } from "react"
import { connect } from "react-redux"
import Card from "./Card"

class DrawCard extends Component {

    state = {
        showCards: false,
        drawnCards: []
    }

    handleClick = (e) => {
        this.getCards(e.target.value)
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

    showDrawnCards = () => {
        const cards = this.state.drawnCards
        return(
            <>
                {this.state.showCards ? 
                    cards.map(card => 
                        <div className="col  p-3" key={card.id}>
                            <Card card={card} num={this.getRandomInt(2)} className="drawnCard"/> 
                        </div> 
                    ) 
                    : null 
                }
            </>
        )
    }
    
    render() {
        return(
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <button onClick={this.handleClick} value="1" className="btn btn-dark btn-lg button-space">Draw one card</button>
                        <button onClick={this.handleClick} value="3" className="btn btn-dark btn-lg button-space">Draw three cards</button>
                        <button onClick={this.handleClick} value="5" className="btn btn-dark btn-lg button-space">Draw five cards</button>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    {this.showDrawnCards()}
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

export default connect(mapStateToProps)(DrawCard)