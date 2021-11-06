import React, { Component } from 'react'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

class Card extends Component {

    state = {
        showCardInfo: false
    }
    
    handleClick = () => {
        this.setState({showCardInfo: !this.state.showCardInfo})
    }

    displayCard() {
        const card = this.props.card
        const num = this.props.num

        if (this.props.className === 'card') {
            console.log(this.props)
            return (
                <div class="front">
                    <CardImage card={card} className='cardImage' />
                    {this.state.showCardInfo ? 
                    <CardInfo card={card} className="cardInfo" /> : null }
                </div>
            )
        } 
        else if (num === 0 || num === 1) {
            return (
                <div className="card-container" onClick={this.handleClick}>
                    {this.state.showCardInfo ? <CardInfo card={card} num={num} /> : 
                        <CardImage card={card} num={num} className="drawCard" /> 
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