import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App container', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('app-container')).toBeInTheDocument();
});
