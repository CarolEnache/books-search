import React from 'react';

import { useFetch } from './hooks';

import './App.css';

function App() {
  const data = { page: 1, itemsPerPage: 20, filters: [] };
  const { response } = useFetch('http://nyx.vima.ekt.gr:3000/api/books', {
    body: JSON.stringify(data),
  });

  console.log(response);

  return (
    <div className='App'>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
