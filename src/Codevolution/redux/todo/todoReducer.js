import { ADD_TODO, TOGGLE_TODO } from './todoTypes';

const initialState = [
  {
    id: 1,
    text: 'firstText',
    completed: false,
  },
  {
    id: 2,
    text: 'secondText',
    completed: true,
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
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
