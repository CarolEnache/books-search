import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { initialState, reducer } from './state-management';

import { Container } from 'react-bootstrap';

import { BookSearchResults } from './layouts';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Container data-testid='app-container'>
          <Router>
            <Route path='/:page?' component={BookSearchResults} />
          </Router>
        </Container>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
