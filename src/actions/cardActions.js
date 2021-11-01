export function fetchCards() {
    return (dispatch) => {
        dispatch({ type: "LOADING_CARDS", loading: true })

        fetch('http://localhost:3000/cards')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_CARDS", cards: data, loading: false })
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
            id: card.id
        }
        
        fetch(`http://localhost:3000/cards/${card.id}`, {
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

    // componentDidMount() {
    //     const token = localStorage.getItem("jwt")
    //     fetch('http://localhost:3000/cards', {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })
    //     .then(resp => resp.json())
    //     .then(data => this.setState({cards: data}))
    //     .catch(err => console.log(err))
    // }