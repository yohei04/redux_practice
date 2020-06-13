import React from 'react';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoTypes';

export const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export default todoReducer;
