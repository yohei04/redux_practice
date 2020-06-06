import ADD_TODO from './todoTypes';

// initialState = {
//   text: firstText
// }

const todoReducer = (state = firstText, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
