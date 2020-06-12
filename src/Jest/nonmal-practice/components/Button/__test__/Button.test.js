import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

import { render } from '@testing-library/react';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId('button')).toHaveTextContent('click me please');
});