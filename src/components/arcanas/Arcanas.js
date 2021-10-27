import React, { Component } from 'react'
import Arcana from './Arcana'


class Arcanas extends Component {
    
    render() {
        // console.log('arcanas props', this.props)
        return (
            <div>
                {this.props.arcanas.map( arcana => 
                    <Arcana key={arcana.id} arcana={arcana} 
                    suits={this.props.suits.filter(suit => suit.arcana.id === arcana.id)} 
                    cards={this.props.cards}
                    />
                )}
            </div>
        )
    }
}

export default Arcanas