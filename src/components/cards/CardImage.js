const CardImage = (props) => {
    const card = props.card
    const num = props.num
    console.log(card)
    const cardImage = (card.avatar)

    if (num === 0) {
        return (
            <div>
                <img src={cardImage} 
                    alt={card.name} 
                    className="large rounded mx-auto d-block"
                />
            </div>
        )
    } else if (num === 1) {
        return (
            <img src={cardImage} 
                alt={card.name}
                className="large reversed rounded mx-auto d-block"
            />
        )
    } else {
        return (
            <div className="container p-1">
                <img src={cardImage} 
                    alt={card.name} 
                    className="medium rounded mx-auto d-block"  
                /> 
            </div>
        )
    }
}

export default CardImage