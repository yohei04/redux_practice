import { combineReducers } from 'redux';
import todoReducer from './redux/todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
