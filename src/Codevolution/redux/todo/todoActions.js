import { ADD_TODO } from './todoTypes';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
