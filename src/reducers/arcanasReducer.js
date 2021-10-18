const arcanasReducer = (state = { arcanas: [], loading: false }, action) => {
    switch (action.type) {
      case "LOADING_ARCANAS":
        return {
          ...state,
          arcanas: [...state.arcanas],
          loading: true,
        };
  
      case "ADD_ARCANAS":
        return {
          ...state,
          arcanas: action.arcanas,
          loading: false,
        };
  
      default:
        return state
    }
  }
  
  export default arcanasReducer