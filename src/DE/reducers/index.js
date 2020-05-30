import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import colorReducer from "./colorReducer";
import posts from './postReducer'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  color: colorReducer,
  posts: posts,
});

export default allReducers;
