import { combineReducers } from "redux";
import arcanasReducer from "./arcanasReducer";
import cardsReducer from "./cardsReducer";
import suitsReducer from "./suitsReducer";

const rootReducer = combineReducers({
    arcanas: arcanasReducer,
    cards: cardsReducer,
    suits: suitsReducer
  });
  
  export default rootReducer;