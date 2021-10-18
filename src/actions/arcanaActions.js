export function fetchArcanas() {
    return (dispatch) => {
      dispatch({ type: "LOADING_ARCANAS" });
        // const token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/arcanas')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "ADD_ARCANAS", arcanas: data });
        })
        .catch(err => console.log(err))
    }
}