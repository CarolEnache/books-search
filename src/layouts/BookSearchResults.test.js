import React from 'react';
import { render } from '@testing-library/react';
import BookSearchResults from './BookSearchResults';

test('renders the BookSearch', () => {
  const { getByTestId } = render(<BookSearchResults />);
  const BookSearch = getByTestId('book-search-results');

  expect(BookSearch).toBeInTheDocument();
});
