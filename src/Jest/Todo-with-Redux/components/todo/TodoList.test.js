import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { TodoList } from './index';
import rootReducer from '../../rootReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe('<TodoList />', () => {
  test('should ', () => {
    renderWithRedux(<TodoList />);
    const defaultText = screen.getByText(/No Todos now/i);
    expect(defaultText).toBeInTheDocument();
    screen.debug();
  });
});
