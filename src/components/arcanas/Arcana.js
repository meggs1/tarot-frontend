import React, { Component } from 'react'

import Suits from '../suits/Suits'

const Arcana = (props) => {
    const arcana = props.arcana
    const suits = props.suits
    return (
        <div>
            <h1> {arcana.name} </h1>
            <Suits suits={suits} cards={props.cards}/>
        </div>
    )
}

export default Arcana