import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './todoTypes';
import axios from 'axios';

let nextTodoId = 1;
export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      title,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const fetchTodosRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest);
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => {
        const todos = res.data;
        dispatch(fetchTodosSuccess(todos));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchTodosFailure(errorMsg));
      });
  };
};
