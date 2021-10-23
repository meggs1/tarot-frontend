export function fetchCards() {
    return (dispatch) => {
      dispatch({ type: "LOADING_CARDS", loading: true })
        // const token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/cards')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_CARDS", cards: data });
        })
        .catch(err => console.log(err))
    }
}

export function editCard(card) {
    return (dispatch) => {
        fetch(`http://localhost:3000/cards/${card.id}`, {
        method: 'PATCH',
        body: JSON.stringify(card),
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
                    .then(json => dispatch({type: 'EDIT_CARD', payload: json}))
            } else {
                return resp.json()
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