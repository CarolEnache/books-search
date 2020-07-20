import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ page, numberOfPages, setPage }) => {
  if (page > numberOfPages) {
    setPage(1);
  }
  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev
        onClick={() => setPage(page === 1 ? page : page - 1)}
      ></BootstrapPagination.Prev>
      <BootstrapPagination.Item active>
        Page {page} of {numberOfPages}
      </BootstrapPagination.Item>
      <BootstrapPagination.Next
        onClick={() => setPage(page === numberOfPages ? page : page + 1)}
      ></BootstrapPagination.Next>
    </BootstrapPagination>
  );
};

export default Pagination;
