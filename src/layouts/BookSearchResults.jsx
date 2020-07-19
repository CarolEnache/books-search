import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { StateContext } from '../App';

import { BookList } from '../components/books';
import { Header } from '../components/header';
import { Pagination } from '../components/pagination';

const BookSearchResults = ({ match }) => {
  const { searchValue } = useContext(StateContext);

  const { page = 1 } = match.params;
  let history = useHistory();
  const [response, setResponse] = useState();

  const setPage = (pageToBe) => {
    history.push(`/${pageToBe}`);
  };

  useEffect(() => {
    const fn = async () => {
      const data = {
        page,
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

      return setResponse(json);
    };
    fn();
  }, [page, searchValue]);

  return response ? (
    <>
      <Header />
      <BookList response={response} />
      <Pagination
        page={Number(page)}
        numberOfPages={Math.ceil(response.count / 20)}
        setPage={setPage}
      />
    </>
  ) : null;
};

export default BookSearchResults;
