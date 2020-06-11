import React from 'react';
import Clickers from './Clickers';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  getByTitle,
} from '@testing-library/react';

afterEach(cleanup);

it('displays the count', () => {
  const { getByTestId } = render(<Clickers />);
  expect(getByTestId('count')).toHaveTextContent('0');
});

it('increments count', () => {
  const { getByTestId, getByText } = render(<Clickers />);
  fireEvent.click(getByText('Up'));
  expect(getByTestId('count')).toHaveTextContent('1');
});

it('decrements count delayed', async () => {
  const { getByText } = render(<Clickers />);
  fireEvent.click(getByText('Down'));
  const countSpan = await waitForElement(() => getByText('-1'));
  expect(countSpan).toHaveTextContent('-1');
});

it('increments two count', async () => {
  const { getByTestId, getByText } = render(<Clickers />);
  fireEvent.click(getByText('TwoUp'));
  const countSpan = await waitForElement(() => getByText('2'));
  expect(countSpan).toHaveTextContent('2');
});
