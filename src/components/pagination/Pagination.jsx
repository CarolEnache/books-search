import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Pagination as BootstrapPagination } from 'react-bootstrap';

import { StateContext } from '../../App';

const Pagination = () => {
  const { response } = useContext(StateContext);
  const [pageValue, setPageValue] = useState(1);

  const numberOfPages = Math.ceil(response.count / 20);

  let history = useHistory();

  const setPage = (pageToBe) => {
    history.push(`/${pageToBe}`);
    setPageValue(pageToBe);
  };

  if (pageValue > numberOfPages) {
    setPage(numberOfPages);
  }

  useEffect(() => {
    const pathname = parseInt(history.location.pathname.replace(/[/]/g, ''));
    const pageValue = isNaN(pathname) ? 1 : pathname;
    setPageValue(pageValue);
    // eslint-disable-next-line
  }, []);

  const decrementPage = pageValue === numberOfPages ? pageValue : pageValue - 1;
  const incrementPage = pageValue === numberOfPages ? pageValue : pageValue + 1;

  return (
    <BootstrapPagination data-testid='book-search-pagination'>
      <BootstrapPagination.Prev
        onClick={() => setPage(decrementPage)}
      ></BootstrapPagination.Prev>
      <BootstrapPagination.Item active>
        Page {pageValue} of {isNaN(numberOfPages) ? '...' : numberOfPages}
      </BootstrapPagination.Item>
      <BootstrapPagination.Next
        onClick={() => setPage(incrementPage)}
        data-testid='book-search-pagination-next'
      ></BootstrapPagination.Next>
    </BootstrapPagination>
  );
};

export default Pagination;
