import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import colorReducer from "./colorReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  color: colorReducer,
});

export default allReducers;
