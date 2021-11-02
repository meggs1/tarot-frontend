import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

class Card extends Component {

    state = {
        showCardInfo: false,
        drawnCards: []
    }
    
    handleClick = () => {
        this.setState({showCardInfo: !this.state.showCardInfo})
    }

    displayCard() {
        const card = this.props.card
        const num = this.props.num

        if (this.props.className === 'card') {
            return (
                <div class="front" onClick={this.handleClick}>
                    <CardImage card={card} className='cardImage' />
                    {this.state.showCardInfo ? <CardInfo card={card} className="cardInfo"/> : null }
                </div>
            )
        } 
        else if (num === 0) {
            return (
                <div className="large rounded mx-auto d-block" onClick={this.handleClick}>
                    {this.state.showCardInfo ? <CardInfo card={card} num={num} /> : 
                        <CardImage card={card} num={num} className="drawCard" /> 
                    }
                </div>
            )
        } 
        else if (num === 1) {
            return (
                <div className="large rounded mx-auto d-block" onClick={this.handleClick}>
                    {this.state.showCardInfo ? <CardInfo card={card} num={num} /> 
                        : <CardImage card={card} num={num} className="drawCard" /> 
                    }
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.displayCard()}
            </div>
        )
    }
}

export default Card