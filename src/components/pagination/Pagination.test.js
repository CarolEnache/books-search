import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { DispatchContext, StateContext } from '../../App';

import { Pagination } from './';

afterEach(cleanup);

describe('Pagination component', () => {
  it('renders the component', () => {
    const { getByTestId } = render(<Pagination />);

    expect(getByTestId('book-search-pagination')).toBeInTheDocument();
    expect(getByTestId('book-search-pagination-next')).toBeInTheDocument();
  });

  it('changes the page count from 1 to 2 when the next button is clicked', () => {
    const pageValue = 1;
    const response = {
      count: 30,
    };
    const dispatchMock = jest.fn();

    const { getByTestId, getByText } = render(
      <StateContext.Provider value={{ pageValue, response }}>
        <DispatchContext.Provider value={dispatchMock}>
          <Pagination />
        </DispatchContext.Provider>
      </StateContext.Provider>
    );

    const nextButton = getByTestId('book-search-pagination-next');

    expect(getByText('Page 1 of 2')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_PAGE_VALUE',
      page: 2,
    });
  });
});
