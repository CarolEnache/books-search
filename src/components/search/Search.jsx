import React, { useContext } from 'react';

import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { DispatchContext, StateContext } from '../../App';

const Search = () => {
  const dispatch = useContext(DispatchContext);
  const { searchValue } = useContext(StateContext);

  return (
    <InputGroup className='mb-3'>
      <FormControl
        placeholder='Search by book title'
        aria-label='Search by book title'
        aria-describedby='basic-addon2'
        value={searchValue}
        onChange={(event) =>
          dispatch({
            type: 'SET_SEARCH_VALUE',
            searchValue: event.target.value,
          })
        }
      />
      <InputGroup.Append>
        <Button
          variant='outline-secondary'
          onClick={() =>
            dispatch({ type: 'SET_SEARCH_VALUE', searchValue: '' })
          }
        >
          Reset
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
