import { combineReducers } from "redux";
import arcanasReducer from "./arcanasReducer";
import cardsReducer from "./cardsReducer";
import suitsReducer from "./suitsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    arcanas: arcanasReducer,
    cards: cardsReducer,
    suits: suitsReducer,
    user: userReducer
  });
  
  export default rootReducer;