import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from '../../test-utils';
import Todo from './Todo';

const setUpToMakeTodo = () => {
  renderWithRedux(<Todo />);
  const addTodoButton = screen.getByRole('button', { name: /add todo/i });
  const inputTodo = screen.getByPlaceholderText('add todo...');
  userEvent.type(inputTodo, 'text test');
  userEvent.click(addTodoButton);
};

describe('<Todo />', () => {
  test('should add todo with valid text', () => {
    renderWithRedux(<Todo />);
    const addTodoButton = screen.getByRole('button', { name: /add todo/i });
    const inputTodo = screen.getByPlaceholderText('add todo...');
    userEvent.type(inputTodo, 'text test');
    userEvent.click(addTodoButton);
    const todoList = screen.getByLabelText('text test');
    expect(todoList).toBeInTheDocument();
    expect(inputTodo.value).toBe('');
  });

  test("shouldn't add todo with empty text", () => {
    renderWithRedux(<Todo />);
    const addTodoButton = screen.getByRole('button', { name: /add todo/i });
    const inputTodo = screen.getByPlaceholderText('add todo...');
    userEvent.type(inputTodo, '');
    userEvent.click(addTodoButton);
    const noShowTodo = screen.queryByLabelText('');
    expect(noShowTodo).toBeNull;
    const showTodo = screen.getByText('No Todos now');
    expect(showTodo).toBeTruthy;
  });

  test('should have line-through when click the todo text', () => {
    setUpToMakeTodo();
    const todoList = screen.getByText('text test');
    expect(todoList).toHaveStyle('text-decoration: none');
    userEvent.click(todoList);
    expect(todoList).toHaveStyle('text-decoration: line-through');
  });

  test('should have line-through when click the checkbox', () => {
    setUpToMakeTodo();
    const checkbox = screen.getByLabelText('text test');
    expect(checkbox.checked).toBe(false);
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test('should delete todo and show default text when click delete button', () => {
    setUpToMakeTodo();
    const deleteButton = screen.getByRole('button', { name: /x/i });
    const addedTodoList = screen.queryByText('text test');
    expect(addedTodoList).toHaveTextContent('text test');
    userEvent.click(deleteButton);
    const defaultText = screen.getByText(/No Todos now/i);
    expect(defaultText).toBeInTheDocument();
    screen.debug();
  });
});
