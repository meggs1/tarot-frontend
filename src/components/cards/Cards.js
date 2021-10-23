import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {

    render() {
        // console.log('cards props', this.props)
        // debugger
        return (
            
        <div>
            {this.props.cards.map( card => 
              
             <Card card={card} key={card.id} />
            
            )}
        </div>
        )
    }
}

export default Cards