export function fetchSuits() {
    return (dispatch) => {
      dispatch({ type: "LOADING_SUITS" });
        fetch('https://tarot-card-reader-api.herokuapp.com/suits')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_SUITS", payload: data });
        })
        .catch(err => console.log(err))
    }
}