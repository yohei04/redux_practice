import { ADD_TODO } from './todoTypes';

const initialState = [
  {
  text: "firstText"
  }
]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.text}];
    default:
      return state;
  }
};

export default todoReducer;
