import { useEffect } from 'react';

const useFetch = ({ pageValue, searchValue, dispatch }, url) => {
  useEffect(() => {
    const fn = async () => {
      const data = {
        page: pageValue,
        itemsPerPage: 20,
        filters: [
          {
            type: 'all',
            values: [searchValue],
          },
        ],
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();

      return dispatch({ type: 'SET_RESPONSE', response: json });
    };
    fn();
  }, [pageValue, searchValue, dispatch, url]);
};

export default useFetch;
