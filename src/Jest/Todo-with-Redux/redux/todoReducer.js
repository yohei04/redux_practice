import React from 'react';
import { ADD_TODO } from './todoTypes';

export const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.payload.id, text: action.payload.text }];
    default:
      return state;
  }
};

export default todoReducer;
