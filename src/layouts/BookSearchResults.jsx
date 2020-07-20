import React, { useEffect, useContext } from 'react';

import { DispatchContext, StateContext } from '../App';

import { BookList } from '../components/books';
import { Header } from '../components/header';
import { Pagination } from '../components/pagination';

const BookSearchResults = () => {
  const { searchValue, pageValue, response } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const fn = async () => {
      const data = {
        page: pageValue,
        itemsPerPage: 20,
        filters: [
          {
            type: 'all',
            values: [searchValue],
          },
        ],
      };
      const response = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();

      return dispatch({ type: 'SET_RESPONSE', response: json });
    };
    fn();
  }, [pageValue, searchValue, dispatch]);

  return response ? (
    <>
      <Header />
      <BookList response={response} />
      <Pagination />
    </>
  ) : null;
};

export default BookSearchResults;
