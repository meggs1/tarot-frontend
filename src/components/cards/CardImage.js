import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import Card from './Card'


class CardImage extends Component {

    state = {
        isFlipped: false,
        drawnCards: [],
        showCardInfo: false
    }

    
    handleClick = () => {
        this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))
    }

    imgFlip() {
        console.log("card img", this.props)
        const num = this.props.num
        const card = this.props.card

        if (this.props.className === 'cardImage') {
                // console.log('card img', card)
            return (
                <>
                    <img src={card.image_url ? card.image_url.url : null} 
                    alt={card.name} width="120" height="198" onClick={this.handleClick} 
                     />
                    {this.state.showCardInfo ? <Card card={card} className="cardInfo"/> : null }
                </>
            )

        } else if (num === 0 && this.props.className === "drawCard") {
 
                return (
                    <div className="upright-card">
                        <ReactCardFlip isFlipped={this.state.isFlipped} >
                                <div class="front">
                                    <img src={card.image_url ? card.image_url.url : null} 
                                        alt={card.name} onClick={this.handleClick} 
                                        class="large rounded mx-auto d-block"
                                    />
                                </div>  
                                <div class ="back container bg-white rounded" onClick={this.handleClick} >
                                    <div class="card-text">
                                        <h3 class="text-center">{card.name} Upright</h3>
                                        <p>{card.upright_meaning}</p>
                                    </div>
                                </div>
                        </ReactCardFlip>
                    </div>
            )
        } else if (num === 1  && this.props.className === "drawCard"){
            return (

                <div className="reversed-card">
                <ReactCardFlip isFlipped={this.state.isFlipped} >
                        <div class="front">
                            <img src={card.image_url ? card.image_url.url : null} 
                                alt={card.name} onClick={this.handleClick} 
                                class="large reversed rounded mx-auto d-block"
                            />
                        </div>  
                        <div class ="back container bg-white rounded" onClick={this.handleClick} >
                            <div class="card-text">
                                <h3 class="text-center">{card.name} Reversed</h3>
                                <p>{card.reversed_meaning}</p>
                            </div>
                        </div>
                </ReactCardFlip>
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