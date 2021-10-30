import React, { Component } from 'react'
import Card from './Card'

class CardImage extends Component {

    state = {
        showCardInfo: false
    }
    
    
    handleClick = () => {
        console.log("click card image")
        this.setState({ showCardInfo: !this.state.showCardInfo })
    }


    imgFlip() {
        const num = this.props.num
        const card = this.props.card

        if (this.props.className === 'cardImage') {
            return (
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-auto">
                        <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" onClick={this.handleClick} class="rounded mx-auto d-block"/>
                            {this.state.showCardInfo ? <Card card={card} className="cardInfo"/> : null }
                        </div>
                    </div>
                </div>
            )
        } else if (num === 0 ) {
            return (
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-auto">
                            <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" onClick={this.handleClick} class="rounded mx-auto d-block"/>
                            {this.state.showCardInfo ? <Card card={card} num={num} /> : null }
                        </div>
                    </div>
                </div>
            )

        } else if (num === 1){
            return (
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-auto">
                            <img className="image_reversed" src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" onClick={this.handleClick} class="rounded mx-auto d-block"/>
                            {this.state.showCardInfo ? <Card card={card} num={num} /> : null }
                        </div>
                    </div>
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