import React from 'react'

function CardImage(props) {
    // console.log(props)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    function imgFlip() {
        const num = getRandomInt(2)
        const card = props.card

        console.log(num)
        console.log(card)
        if (num >= 1 ){
            return (
            <div class="image_upright">
                <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" />
            </div>
            )
        } else {
            return (
            <div>
                <div class="image_reversed">
                    <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" />
                </div>
            </div>
            )
        }
    }

    return (
        <div>
            {imgFlip()}
        </div>
    )

}

export default CardImage