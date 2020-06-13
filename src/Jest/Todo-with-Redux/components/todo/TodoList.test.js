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
  // test("should have line-through when it's clicked", () => {
  //   // renderWithRedux(<TodoList />);
  //   const { container } = renderWithRedux(<TodoList />);
  //   const label = document.createElement('label');
  //   const labelNode = container.querySelector('ul').appendChild(label)
  //   labelNode.innerHTML = 'dummy text';
  //   labelNode.htmlFor = 'checkbox-0';
  //   const showTodo = screen.getByLabelText('dummy text');
  //   expect(showTodo).toHaveTextContent('dummy text');
  //   userEvent.click(showTodo);
  //   // expect(todoList).toHaveStyle(`text-decoration: line-through`);
  //   screen.debug();
  // });
});
