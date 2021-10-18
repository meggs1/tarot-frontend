export function fetchCards() {
    return (dispatch) => {
      dispatch({ type: "LOADING_CARDS" });
        // const token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/cards')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_CARDS", cards: data });
        })
        .catch(err => console.log(err))
    };
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