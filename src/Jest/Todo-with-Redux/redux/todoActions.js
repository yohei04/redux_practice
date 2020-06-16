import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from './todoTypes';
import axios from 'axios';

let nextTodoId = 4;
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
    type: FETCH_TODOS_REQUEST,
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    error,
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((res) => res.json())
      .then((body) => dispatch(fetchTodosSuccess(body)))
      .catch((error) => dispatch(fetchTodosFailure(error)));
  };
};
