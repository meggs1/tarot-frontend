import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import suitsReducer from "./suitsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    cards: cardsReducer,
    suits: suitsReducer,
    user: userReducer
  });
  
  export default rootReducer;