import React from 'react';
import { render } from '@testing-library/react';
import BookSearchResults from './BookSearchResults';

test('renders the BookSearch', () => {
  const { getByTestId, getByText } = render(<BookSearchResults />);
  const BookSearch = getByTestId('book-search-results');
  const BookSearchResultsComponent = getByTestId('book-list-row');
  const BookSearchPagination = getByTestId('book-search-pagination');
  const Header = getByText('Book search results');

  expect(BookSearch).toBeInTheDocument();
  expect(Header).toBeInTheDocument();
  expect(BookSearchResultsComponent).toBeInTheDocument();
  expect(BookSearchPagination).toBeInTheDocument();
});
