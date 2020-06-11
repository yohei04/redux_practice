import { ADD_TODO } from './todoTypes';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId + 1,
      text,
    },
  };
};
