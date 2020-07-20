import React from 'react';
import { render } from '@testing-library/react';

import BookList from './BookList';
import bookListResponseProp from '../../__mocks__/mockResponse';

describe('Book component', () => {
  it('renders', () => {
    const { queryAllByTestId } = render(
      <BookList response={bookListResponseProp} />
    );

    expect(queryAllByTestId('book-list-row')).toHaveLength(2);
    expect(queryAllByTestId('book-list-column')).toHaveLength(5);
  });
});
