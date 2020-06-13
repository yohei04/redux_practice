import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from '../../test-utils';
import { TodoList } from './index';

describe('<TodoList />', () => {
  test('should ', () => {
    renderWithRedux(<TodoList />);
    const defaultText = screen.getByText(/No Todos now/i);
    expect(defaultText).toBeInTheDocument();
  });
});
