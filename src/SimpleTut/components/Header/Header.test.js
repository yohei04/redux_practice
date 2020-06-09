import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  getByTitle,
} from '@testing-library/react';
import Header from './Header'


const setUp = (props = {}) => {
  const getByTestId = render(<Header {...props} />);
}

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should render without errors', () => {
    // const { getByTestId, debug } = render(<Header />);
    expect(component('headerComponent')).toBeDefined();
  })

  // it('should render a logo', () => {
  //   // const { getByTestId, debug } = render(<Header />);
  //   expect(getByTestId('logoIMG')).toBeDefined();
  // })

})
