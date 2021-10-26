import React, { Component } from 'react'
import Card from './Card'

class CardImage extends Component {

    state = {
        showCard: false
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
    
    handleClick = () => {
        console.log("click")

        this.setState({ showCard: !this.state.showCard })
        console.log(this.state)
    }


    imgFlip() {
        const num = this.getRandomInt(2)
        const card = this.props.card

        if (this.props.className === 'cardImage') {
            return (
                <div>
                    <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" onClick={this.handleClick} />
                    {this.state.showCard ? <Card card={card} className="cardInfo"/> : null }
                </div>
            )
        }else if (num === 0 ) {
            return (
                <div>
                    <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" onClick={this.handleClick} />
                    {this.state.showCard ? <Card card={card} num={num} /> : null }
                    
                </div>
            )

        } else if (num === 1){
            return (
                <div>
                    <img className="image_reversed" src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" />
                    {this.state.showCard ? <Card card={card} num={num} /> : null }
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.imgFlip()}
            </div>
        )
    }
    

}

export default CardImage