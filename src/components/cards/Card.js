import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

class Card extends Component {

    state = {
        isFlipped: false,
        drawnCards: []
    }
    
    handleClick = () => {
        this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))
    }

    displayCard() {
        console.log("card img", this.props)
        const num = this.props.num
        const card = this.props.card
        
        if (this.props.className === 'card') {
            return (
                <div class="front" onClick={this.handleClick}>
                    <CardImage card={card} className='cardImage' />
                    {this.state.isFlipped ? <CardInfo card={card} className="cardInfo"/> : null }
                </div>
            )
        } else if (num === 0) {
            console.log(card)
            return (
                <div className="upright-card">
                    <ReactCardFlip isFlipped={this.state.isFlipped} >
                            <div class="front" onClick={this.handleClick}>
                                <CardImage card={card} num={num} />
                            </div>  
                            <div class ="back container bg-white rounded" onClick={this.handleClick} >
                                <CardInfo card={card} num={num} />
                            </div>
                    </ReactCardFlip>
                </div>
            )
        } else if (num === 1) {
            return (
                <div className="reversed-card">
                    <ReactCardFlip isFlipped={this.state.isFlipped} >
                            <div class="front" onClick={this.handleClick}>
                                <CardImage card={card} num={num}/>
                            </div>  
                            <div class ="back container bg-white rounded" onClick={this.handleClick} >
                                <CardInfo card={card} num={num} />
                            </div>
                    </ReactCardFlip>
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