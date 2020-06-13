import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from '../../test-utils';
import { AddTodo } from './index';

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
    const addTodoButton = screen.getByRole('button', { name: /add todo/i });
    userEvent.type(inputTodo, 'text test');
    expect(inputTodo.value).toBe('text test');
    userEvent.click(addTodoButton)
    expect(inputTodo.value).toBe('');
  });
});
