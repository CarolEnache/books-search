import { useEffect, useState } from 'react';

export const defaultOptions = {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: '',
};

export const useFetch = (url, options = {}) => {
  const actualOptions = {
    ...defaultOptions,
    ...options,
  };
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, actualOptions);

        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { response, error };
};
