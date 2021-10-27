import { Component } from "react"
import CardImage from "./cards/CardImage"

class Home extends Component {

    state = {
        showCards: false,
        cards: []
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    handleClick = (e) => {
        this.setState({showCards: !this.state.showCards})
        this.getCards(e.target.value)
    }

    getCards = (num) => {
        const cards = this.props.cards
        const numOfCards = parseInt(num)
        const selectedCards = []

        // for (var i = 0; i < numOfCards; i++) {
        //     selectedCards.push(cards[Math.floor(Math.random()*cards.length)]);
        // }

        for (var i = 0; i < numOfCards; i++) {
            var idx = Math.floor(Math.random() * cards.length);
            selectedCards.push(cards[idx]);
            cards.splice(idx, 1);
          }
        
        this.setState({cards: selectedCards})
        return (
            selectedCards
        )
    }

    drawCards = () => {
        const cards = this.state.cards
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
        // console.log('home props', this.props)
        return(
            <div>
                Home Page
                <button onClick={this.handleClick} value="1">Draw one card</button>
                <button onClick={this.handleClick} value="3">Draw three cards</button>
                <button onClick={this.handleClick} value="5">Draw five cards</button>
                {this.drawCards()}
            </div>
        )
    }
}

export default Home