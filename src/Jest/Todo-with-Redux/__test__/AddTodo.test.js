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

  test('should have Add Todo button', () => {
    renderWithRedux(<AddTodo />);
    expect(screen.getByRole('button')).toHaveTextContent(/add todo/i);
  });

  test('should show typed text', () => {
    renderWithRedux(<AddTodo />);
    const addTodoButton = screen.getByRole('button', { name: /add todo/i });
    const inputTodo = screen.getByPlaceholderText('add todo...');
    userEvent.type(inputTodo, 'text test');
    expect(inputTodo.value).toBe('text test');
  });

  test('should add todo with valid text', () => {
    renderWithRedux(<AddTodo />);
    const addTodoButton = screen.getByRole('button', { name: /add todo/i });
    const inputTodo = screen.getByPlaceholderText('add todo...');
    userEvent.type(inputTodo, 'text test');
    userEvent.click(addTodoButton);
    const todoList = screen.getAllByRole('listitem');
    expect(todoList).toHaveLength(1);
    expect(todoList[0]).toHaveTextContent('text test');
  });
});
