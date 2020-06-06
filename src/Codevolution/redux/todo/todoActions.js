import { ADD_TODO } from './todoTypes';

let nextTodoId = 3;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text,
      completed: false,
    },
  };
};


