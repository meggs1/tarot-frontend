import React, { Component } from 'react'

class Suits extends Component {

    render() {
        console.log('suits props', this.props)
        return (
            
        <div>
            {this.props.suits.map( suit => 
             <p>{suit.name}</p>
            )}
        </div>
        )
    }
}

export default Suits