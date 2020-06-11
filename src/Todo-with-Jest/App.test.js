import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../Jest/components/Inc-Dec-button/App';

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
