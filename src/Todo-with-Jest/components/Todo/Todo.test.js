import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('<AddTodo/ >', () => {
  beforeEach(() => {
    render(<Todo />);
  });

  test('should displays the addTodo button', () => {
    const addTodo = screen.getByRole('button');
    expect(addTodo).toHaveTextContent('addTodo');
    screen.debug();
  });

  test('should input value', () => {
    const input = screen.getByPlaceholderText('add todo...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('should add typed todo', () => {
    const addTodo = screen.getByRole('button');
    const todoList = screen.getByTestId('todoList');
    const input = screen.getByPlaceholderText('add todo...');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(addTodo);
    expect(todoList).toHaveTextContent('test');
    expect(input.value).toBe('');
  });
});

describe('<TodoList/ >', () => {
  beforeEach(() => {
    render(<Todo />);
  });

  test('should displays the initialState', () => {
    const todoList = screen.getByTestId('todoList');
    expect(todoList).toHaveTextContent('first text');
    expect(todoList).toHaveTextContent('second text');
  });
});
