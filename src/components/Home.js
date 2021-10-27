import { Component } from "react"
import CardImage from "./cards/CardImage"

// import CardForm from "./cards/CardForm"
class Home extends Component {
    // console.log('home props', props)
    state = {
        showRandomCard: false
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    handleClick = () => {
        console.log("click random card button")

        this.setState({ showRandomCard: true })
        console.log(this.state)
    }

    drawOneCard = () => {
        const card = this.props.cards[Math.floor(Math.random()*this.props.cards.length)]
        const num = this.getRandomInt(2)
        
        console.log(card)
        
        return (
            <div>
                {this.state.showRandomCard? <CardImage card={card} num={num}/> : null }
            </div>
        )
    }

    
    
    render() {
        // console.log('home props', this.props)
        return(
            <div>
                Home Page
                {/* <h1>{props.user.name}</h1> */}
                {/* <p>Your cards {props.user.card_ids.map(card => card.id)}</p> */}
                {/* <CardForm /> */}
                <button onClick={this.handleClick}>Draw one card</button>
                {this.drawOneCard()}
            </div>
        )
    }
}

export default Home