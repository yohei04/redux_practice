import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
import postReducer from "./post/postReducer";
import snackReducer from "./Snack/snackReducer";
import todoReducer from './todo/todoReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  snack: snackReducer,
  user: userReducer,
  post: postReducer,
  todo: todoReducer,
});

export default rootReducer;
