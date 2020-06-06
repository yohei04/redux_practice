import { ADD_TODO } from './todoTypes';

const initialState = [
  {
    id: 1,
    text: 'firstText',
    completed: false,
  },
  {
    id: 2,
    text: 'secondText',
    completed: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: action.payload.completed
        },
      ];
    default:
      return state;
  }
};

export default todoReducer;
