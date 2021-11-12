export function fetchCards() {
    return (dispatch) => {
        dispatch({ type: "LOADING_CARDS", loading: true })

        fetch('https://tarot-card-reader-api.herokuapp.com/cards')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_CARDS", payload: data, loading: false })
        })
        .catch(err => console.log(err))
    }
}

export function editCard(card) {
    return (dispatch) => {
        const cardObj = {
            name: card.name,
            full_meaning: card.fullMeaning,
            upright_meaning: card.uprightMeaning,
            reversed_meaning: card.reversedMeaning,
            image_url: card.image,
            avatar: card.avatar,
            id: card.id
        }
        
        fetch(`https://tarot-card-reader-api.herokuapp.com/cards/${card.id}`, {
            method: 'PATCH',
            body: JSON.stringify(cardObj),
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json()
                    .then(json => dispatch({type: 'EDIT_CARD', payload: json}))
            } else {
                console.log(response)
                return response.json()
                    .then((errors) => {
                        return Promise.reject(errors)
                    });
            }
        })
        .catch(err => console.log(err))
    }
}