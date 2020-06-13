import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from '../../test-utils';
import { TodoList } from './index';
import userEvent from '@testing-library/user-event';

describe('<TodoList />', () => {
  test('should ', () => {
    renderWithRedux(<TodoList />);
    const defaultText = screen.getByText(/No Todos now/i);
    expect(defaultText).toBeInTheDocument();
  });
  test("should have line-through when it's clicked", () => {
    // renderWithRedux(<TodoList />);
    const { container } = renderWithRedux(<TodoList />);
    const li = document.createElement('li');
    container.querySelector('ul').appendChild(li).innerHTML = 'dummy text';
    const todoList = screen.getByRole('listitem');
    expect(todoList).toHaveTextContent('dummy text');
    userEvent.click(todoList)
    expect(todoList).toHaveStyle(`text-decoration: line-through`);
    screen.debug();
  });
});
