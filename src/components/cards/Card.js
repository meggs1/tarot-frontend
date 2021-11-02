import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

class Card extends Component {

    state = {
        isFlipped: false,
        showCardInfo: false,
        drawnCards: []
    }
    
    handleClick = () => {
        // this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))
        this.setState({showCardInfo: !this.state.showCardInfo})
    }

    displayCard() {
        const card = this.props.card
        const num = this.props.num

        if (this.props.className === 'card') {
            return (
                <div class="front" onClick={this.handleClick}>
                    <CardImage card={card} className='cardImage' />
                    {this.state.isFlipped ? <CardInfo card={card} className="cardInfo"/> : null }
                </div>
            )
        } 
        else if (num === 0) {
            return (
                // <div className="upright-card">
                //     <ReactCardFlip isFlipped={this.state.isFlipped} >
                //         <div class="front" onClick={this.handleClick}>
                //             <CardImage card={card} num={num} className="drawCard" />
                //         </div>  
                //         <div class ="back container bg-white rounded" onClick={this.handleClick} >
                //             <CardInfo card={card} num={num} />
                //         </div>
                //     </ReactCardFlip>
                // </div>
                <div className="upright-card">
                
                    <div class="front" onClick={this.handleClick}>
                        <CardImage card={card} num={num} className="drawCard" />
                    </div>  
                    <div>
                        {this.state.showCardInfo ? <CardInfo card={card} num={num} className="reversed" /> : null }
                    </div>
                
                </div>
            )
        } 
        else if (num === 1) {
            return (
                <>
                    <div class="reversed" onClick={this.handleClick} >
                        <CardImage card={card} num={num}  className="drawCard" />
                    </div>  
                    <div>
                        {this.state.showCardInfo ? <CardInfo card={card} num={num} className="reversed" /> : null }
                    </div>
                  </>
                
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