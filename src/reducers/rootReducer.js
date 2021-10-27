import { combineReducers } from "redux";
import arcanasReducer from "./arcanasReducer";
import cardsReducer from "./cardsReducer";
import suitsReducer from "./suitsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    arcanas: arcanasReducer,
    cards: cardsReducer,
    suits: suitsReducer,
    users: usersReducer
  });
  
  export default rootReducer;