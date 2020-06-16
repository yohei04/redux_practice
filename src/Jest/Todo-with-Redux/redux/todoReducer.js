import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from './todoTypes';

export const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            userId: 1,
            id: action.payload.id,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.id),
      };
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.todos,
        error: '',
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        todo: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default todoReducer;
