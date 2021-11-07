const suitsReducer = (state = { suits: [], loading: false }, action) => {
    switch (action.type) {
      case "LOADING_SUITS":
        return {
          ...state,
          suits: [...state.suits],
          loading: true,
        };
  
      case "ADD_SUITS":
        return {
          ...state,
          suits: action.payload,
          loading: false,
        };
  
      default:
        return state
    }
  }
  
  export default suitsReducer