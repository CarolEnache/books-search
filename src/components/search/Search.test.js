import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { DispatchContext, StateContext } from '../../App';

import { Search } from './';

afterEach(cleanup);

describe('Search component', () => {
  it('renders the component', () => {
    const { getByTestId } = render(<Search />);

    expect(getByTestId('book-search-form')).toBeInTheDocument();
  });

  it('is triggering an dispatch event on change', () => {
    const searchValue = '';
    const dispatchMock = jest.fn();

    const { getByPlaceholderText } = render(
      <StateContext.Provider value={{ searchValue }}>
        <DispatchContext.Provider value={dispatchMock}>
          <Search />
        </DispatchContext.Provider>
      </StateContext.Provider>
    );

    const searchInput = getByPlaceholderText('Search by book title');

    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'a' } });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_SEARCH_VALUE',
      searchValue: 'a',
    });
  });
});
