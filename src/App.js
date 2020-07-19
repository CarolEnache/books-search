import React from 'react';
import { useFetch } from './hooks';

import { BookList } from './components/books';

import { Container } from 'react-bootstrap';

import './App.css';

function App() {
  const data = { page: 1, itemsPerPage: 20, filters: [] };
  const { response } = useFetch('http://nyx.vima.ekt.gr:3000/api/books', {
    body: JSON.stringify(data),
  });

  console.log(response);

  return (
    <Container>
      <BookList response={response} />
    </Container>
  );
}

export default App;
