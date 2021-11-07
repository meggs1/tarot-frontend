const cardsReducer = (state = { cards: [], loading: false }, action) => {
  switch (action.type) {  
    case "LOADING_CARDS":
      return {
        ...state,
        cards: [...state.cards],
        loading: true,
      }

    case "ADD_CARDS":
      return {
        ...state,
        cards: action.payload,
        loading: false
      }
    
    case "EDIT_CARD":
      const index = state.cards.findIndex(card => card.id === action.payload.id)
      return {
        ...state, cards: [
            ...state.cards.slice(0, index), 
            action.payload,
            ...state.cards.slice(index + 1)
        ], loading: false
      }
    default:
      return state
  }
}

export default cardsReducer