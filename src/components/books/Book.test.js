import React from 'react';
import { render } from '@testing-library/react';

import Book from './Book';

describe('Book component', () => {
  const bookProps = {
    book_pages: 5,
    book_publication_city: 'London',
    book_publication_country: 'UK',
    book_publication_year: 2020,
    book_title: 'Book search',
    book_author: ['Carol Enache'],
  };

  it('renders', () => {
    const { getByText } = render(<Book {...bookProps} />);

    const publicationPlace = getByText('Publication place London, UK');
    const yearAndTitle = getByText('Book search (2020)');
    const author = getByText('Carol Enache');

    expect(publicationPlace).toBeInTheDocument();
    expect(yearAndTitle).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
