import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './index';

describe('Header component', () => {
  it('renders as expected', () => {
    const { getByText, getByTestId } = render(<Header />);

    expect(getByText('Book search results')).toBeInTheDocument();
    expect(getByText('Search for your favourite book.')).toBeInTheDocument();
    expect(getByTestId('book-search-form')).toBeInTheDocument();
  });
});
