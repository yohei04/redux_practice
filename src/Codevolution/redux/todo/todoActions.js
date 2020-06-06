import ADD_TODO from './todoTypes';

export const todoActions = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};
