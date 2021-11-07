export function fetchSuits() {
    return (dispatch) => {
      dispatch({ type: "LOADING_SUITS" });
        fetch('http://localhost:3000/suits')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_SUITS", payload: data });
        })
        .catch(err => console.log(err))
    }
}