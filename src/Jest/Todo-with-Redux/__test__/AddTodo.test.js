import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddTodo from '../components/AddTodo';
import rootReducer from '../rootReducer';

// const startingState = [{id: 1, text: 'text'}];
const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe('<AddTodo />', () => {
  renderWithRedux(<AddTodo />);

  test('should renders with redux', () => {
    expect(screen.getByTestId('addTodo')).toBeInTheDocument();
  });
});
