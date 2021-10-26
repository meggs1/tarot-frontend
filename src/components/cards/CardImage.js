import React from 'react'

function CardDisplay(props) {
    console.log(props)

    return (
        <div>
            <img src={props.card.image_url ? props.card.image_url.url : null} alt={props.card.name} width="120" height="198" />
            {/* {imgFlip()} */}
        </div>
    )

}

export default CardDisplay