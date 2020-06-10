import React from 'react';
import {
  render,
  screen,
  fireEvent,
  getByTestId,
  getBytext,
} from '@testing-library/react';
import Todo from './Todo';

describe('<Todo/ >', () => {
  beforeEach(() => {
    render(<Todo />);
  });

  test('should displays the initialState', () => {
    const todoList = screen.getByTestId('todoList');
    expect(todoList).toHaveTextContent('first text');
    expect(todoList).toHaveTextContent('second text');
    screen.debug(todoList);
  });
  
});
