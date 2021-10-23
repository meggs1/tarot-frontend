import React, { Component } from 'react'
import Arcana from './Arcana'


class Arcanas extends Component {
    
    render() {
        // console.log('arcanas props', this.props)
        return (
            <div>
                {this.props.arcanas.map( arcana => 
                    <Arcana key={arcana.id} arcana={arcana} cards={this.props.cards.filter(card => card.arcana.id === arcana.id)}/>
                )}
            </div>
        )
    }
}

export default Arcanas