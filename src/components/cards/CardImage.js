const CardImage = (props) => {
    const card = props.card
    const num = props.num
    const cardImage = (card.image_url ? card.image_url.url : null)

    if (num === 0) {
        return (
            <div>
                <img src={cardImage} 
                    alt={card.name} 
                    class="large rounded mx-auto d-block"
                />
            </div>
        )
    } else if (num === 1) {
        return (
            <img src={cardImage} 
                alt={card.name}
                class="large reversed rounded mx-auto d-block"
            />
        )
    } else {
        return (
            <div class="container p-1">
                <img src={cardImage} 
                    alt={card.name} 
                    class="medium rounded mx-auto d-block"  
                /> 
            </div>
        )
    }
}

export default CardImage