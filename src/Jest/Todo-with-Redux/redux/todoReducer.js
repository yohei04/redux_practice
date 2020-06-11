import React from 'react';
import { ADD_TODO } from './todoTypes';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.payload.id, text: action.payload.text }];
    default:
      return state;
  }
};

export default todoReducer;
