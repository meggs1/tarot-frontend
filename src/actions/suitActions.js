export function fetchSuits() {
    return (dispatch) => {
      dispatch({ type: "LOADING_SUITS" });
        // const token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/suits')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_SUITS", suits: data });
        })
        .catch(err => console.log(err))
    }
}