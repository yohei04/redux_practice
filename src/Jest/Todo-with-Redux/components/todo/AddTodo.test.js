import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {AddTodo} from './index'
import rootReducer from '../../rootReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe('<AddTodo />', () => {
  test('should renders with redux', () => {
    renderWithRedux(<AddTodo />);
    expect(screen.getByTestId('addTodo')).toBeInTheDocument();
  });

  test('should have Add Todo button', () => {
    renderWithRedux(<AddTodo />);
    expect(screen.getByRole('button')).toHaveTextContent(/add todo/i);
  });

  test('should show typed text', () => {
    renderWithRedux(<AddTodo />);
    const inputTodo = screen.getByPlaceholderText('add todo...');
    userEvent.type(inputTodo, 'text test');
    expect(inputTodo.value).toBe('text test');
  });
});
