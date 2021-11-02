const CardImage = (props) => {
    const card = props.card
    const num = props.num


    if (num === 0) {
        return (
            <div>
                <img src={card.image_url ? card.image_url.url : null} 
                    alt={card.name} 
                    class="large rounded mx-auto d-block"
                />
            </div>
        )
    } else if (num === 1) {
        return (
            <img src={card.image_url ? card.image_url.url : null} 
                alt={card.name}
                class="large reversed rounded mx-auto d-block"
            />
        )
    } else if (props.className === 'cardImage') {
        return (
            <div class="container p-1">
                <img src={card.image_url ? card.image_url.url : null} 
                    alt={card.name} 
                    class="medium rounded mx-auto d-block"  
                /> 
            </div>
        )
    }
}

export default CardImage