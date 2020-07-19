import React, { useState, useEffect } from 'react';

import { BookList } from './components/books';

import { Container, Pagination, Jumbotron } from 'react-bootstrap';

import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState();

  useEffect(() => {
    const fn = async () => {
      const data = {
        page,
        itemsPerPage: 20,
        filters: [{ type: 'all', values: [''] }],
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
  }, [page]);

  return response ? (
    <Container>
      <Jumbotron fluid>
        <Container>
          <h1>Book search results</h1>
          <p>Search for your favourite book.</p>
        </Container>
      </Jumbotron>
      <BookList response={response} />
      <Pagination>
        <Pagination.Prev
          onClick={() => setPage(page === 1 ? page : page - 1)}
        ></Pagination.Prev>
        <Pagination.Item active>
          Page {page} of {Math.ceil(response.count / 20)}
        </Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)}></Pagination.Next>
      </Pagination>
    </Container>
  ) : null;
}

export default App;
