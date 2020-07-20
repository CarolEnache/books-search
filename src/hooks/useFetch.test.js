import React from 'react';
import { render } from '@testing-library/react';
import { useFetch } from './index';

function setup({ ...args }, url) {
  const returnValue = {};
  function TestComponent() {
    Object.assign(returnValue, useFetch({ ...args }, url));
    return null;
  }

  render(<TestComponent />);
  return returnValue;
}

describe('useFetch custom hook', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementationOnce();
  });

  it('making the correct call to the API', () => {
    const fn = () => null;
    setup({ pageValue: 1, searchValue: '', dispatch: fn }, 'http://some-url');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://some-url', {
      body:
        '{"page":1,"itemsPerPage":20,"filters":[{"type":"all","values":[""]}]}',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
  });
});
