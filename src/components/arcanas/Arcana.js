import React, { Component } from 'react'

import Cards from '../cards/Cards'

class Arcana extends Component {
    
    render() {
        console.log('arcana props', this.props)
        const arcana = this.props.arcana
        const cards = this.props.cards
        return (
            <div>
                <h1> {arcana.name} </h1>
                <Cards cards={cards} />
            </div>
        )
    }
}

export default Arcana