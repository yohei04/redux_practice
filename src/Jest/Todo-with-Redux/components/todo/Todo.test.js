import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTodo, TodoList } from './index';
import rootReducer from '../../rootReducer';
import Todo from './Todo';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe('<Todo />', () => {
  test('should add todo with valid text', () => {
    renderWithRedux(<Todo />);
    const addTodoButton = screen.getByRole('button', { name: /add todo/i });
    const inputTodo = screen.getByPlaceholderText('add todo...');
    userEvent.type(inputTodo, 'text test');
    userEvent.click(addTodoButton);
    const todoList = screen.getAllByRole('listitem');
    expect(todoList).toHaveLength(1);
    expect(todoList[0]).toHaveTextContent('text test');
    expect(inputTodo.value).toBe('');
  });

  test("shouldn't add todo with empty text", () => {
    renderWithRedux(<Todo />);
    const addTodoButton = screen.getByRole('button', { name: /add todo/i });
    const inputTodo = screen.getByPlaceholderText('add todo...');
    userEvent.type(inputTodo, '');
    userEvent.click(addTodoButton);
    const todoList = screen.queryByRole('listitem');
    expect(todoList).not.toBeInTheDocument();
  });
});
