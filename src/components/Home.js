import { Component } from "react"
import CardImage from "./cards/CardImage"

// import CardForm from "./cards/CardForm"
class Home extends Component {
    // console.log('home props', props)
    state = {
        showRandomCard: false,
        showThreeCards: false
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    handleClick = (e) => {
        debugger
        if (e.target.value == 'one-card') {
            console.log("click random card button")
            
            this.setState({ showRandomCard: true })
            console.log(this.state)
        } else {
            this.setState({ showThreeCards: true })
            console.log(this.state)
        }
        
    }

    drawOneCard = () => {
        const card = this.props.cards[Math.floor(Math.random()*this.props.cards.length)]
        const num = this.getRandomInt(2)
        
        console.log(card)
        
        return (
            <div>
                {this.state.showRandomCard ? <CardImage card={card} num={num}/> : null }
            </div>
        )
    }

    drawThreeCards = () => {
        const card1 = this.props.cards[Math.floor(Math.random()*this.props.cards.length)]
        const card2 = this.props.cards[Math.floor(Math.random()*this.props.cards.length)]
        const card3 = this.props.cards[Math.floor(Math.random()*this.props.cards.length)]

        const cards = [card1, card2, card3]

        if (card1 != card2 && card1 != card3 && card2 != card3) {
            return (
                <div>
                    {this.state.showThreeCards ? 
                        cards.map(card => <CardImage card={card} num={this.getRandomInt(2)}/> )
                    : null }
                </div>
            )
        }
        
        
        console.log(cards)
    }

    
    
    render() {
        // console.log('home props', this.props)
        return(
            <div>
                Home Page
                {/* <h1>{props.user.name}</h1> */}
                {/* <p>Your cards {props.user.card_ids.map(card => card.id)}</p> */}
                {/* <CardForm /> */}
                <button onClick={this.handleClick} value="one-card">Draw one card</button>
                <button onClick={this.handleClick}>Draw three cards</button>
                {this.drawOneCard()}
                {this.drawThreeCards()}
            </div>
        )
    }
}

export default Home