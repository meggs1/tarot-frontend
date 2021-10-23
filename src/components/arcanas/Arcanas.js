import React, { Component } from 'react'

class Arcanas extends Component {

    render() {
        console.log('arcanas props', this.props)
        return (
            
        <div>
            {this.props.arcanas.map( arcana => 
             <p>{arcana.name}</p>
            )}
        </div>
        )
    }
}

export default Arcanas