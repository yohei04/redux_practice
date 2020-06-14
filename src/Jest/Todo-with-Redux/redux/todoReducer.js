import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './todoTypes';

export const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        todo: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
