import React, { Component } from 'react'

import Suits from '../suits/Suits'

class Arcana extends Component {
    
    render() {
        console.log('arcana props', this.props)
        const arcana = this.props.arcana
        const suits = this.props.suits
        return (
            <div>
                <h1> {arcana.name} </h1>
                <Suits suits={suits} cards={this.props.cards}/>
            </div>
        )
    }
}

export default Arcana