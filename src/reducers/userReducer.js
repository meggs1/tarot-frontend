const userReducer = (state = { currentUser: {}, authChecked: false, loggedIn: false  }, action) => {
  switch (action.type) {  
    case "AUTHENTICATED":
      return {
        currentUser: action.payload,
        authChecked: true,
        loggedIn: true
      }
    case "NOT_AUTHENTICATED":
      return {
        currentUser: {},
        authChecked: false,
        loggedIn: false
      }
    case 'ADD_CARDS_TO_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer