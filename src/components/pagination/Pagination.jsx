import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Pagination as BootstrapPagination } from 'react-bootstrap';

import { DispatchContext, StateContext } from '../../App';

const Pagination = () => {
  const { pageValue, response } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const numberOfPages = Math.ceil(response.count / 20);

  let history = useHistory();

  const setPage = (pageToBe) => {
    history.push(`/${pageToBe}`);
    dispatch({ type: 'SET_PAGE_VALUE', page: pageToBe });
  };

  useEffect(() => {
    dispatch({ type: 'SET_HISTORY', history });
  }, [dispatch, history]);

  if (pageValue > numberOfPages) {
    setPage(numberOfPages);
  }
  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev
        onClick={() => setPage(pageValue === 1 ? pageValue : pageValue - 1)}
      ></BootstrapPagination.Prev>
      <BootstrapPagination.Item active>
        Page {pageValue} of {numberOfPages}
      </BootstrapPagination.Item>
      <BootstrapPagination.Next
        onClick={() =>
          setPage(pageValue === numberOfPages ? pageValue : pageValue + 1)
        }
      ></BootstrapPagination.Next>
    </BootstrapPagination>
  );
};

export default Pagination;
