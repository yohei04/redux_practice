import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoTypes';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text,
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
