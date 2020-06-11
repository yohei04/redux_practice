import React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  beforeEach(() => {
    render(<Button />);
  })

  test('displays the count', () => {
    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('0');
    screen.debug();
  });

  test('should have two buttons', () => {
    const button = screen.getAllByRole('button')
    expect(button.length).toBe(2);
  });

  test('increments count', () => {
    const count = screen.getByTestId('count');
    fireEvent.click(screen.getByText('+'));
    expect(count).toHaveTextContent('1');
  });

  test('should decrements count', () => {
    const count = screen.getByTestId('count')
    fireEvent.click(screen.getByText('-'))
    expect(count).toHaveTextContent('-1')
  })
  
});
