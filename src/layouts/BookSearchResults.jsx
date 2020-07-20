import React, { useContext } from 'react';
import { useFetch } from '../hooks';

import { DispatchContext, StateContext } from '../App';

import { BookList } from '../components/books';
import { Header } from '../components/header';
import { Pagination } from '../components/pagination';

const BookSearchResults = () => {
  const { searchValue, pageValue, response } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useFetch(
    { pageValue, searchValue, dispatch },
    'http://nyx.vima.ekt.gr:3000/api/books'
  );

  return (
    <div data-testid='book-search-results'>
      <Header />
      <BookList response={response} />
      <Pagination />
    </div>
  );
};

export default BookSearchResults;
