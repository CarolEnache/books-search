import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import { Search } from '../search';

const Header = () => {
  return (
    <Jumbotron>
      <h1>Book search results</h1>
      <p>Search for your favourite book.</p>
      <Search />
    </Jumbotron>
  );
};

export default Header;
