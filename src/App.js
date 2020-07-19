import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { BookSearchResults } from './layouts';
import './App.css';

function App() {
  return (
    <Container>
      <Router>
        <Route exact path='/' component={BookSearchResults} />
        <Route path='/:page' component={BookSearchResults} />
      </Router>
    </Container>
  );
}

export default App;
