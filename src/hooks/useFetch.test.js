import { renderHook } from '@testing-library/react-hooks';
import { useFetch, defaultOptions } from './useFetch';

describe('useFetch custom hook', () => {
  let mockFetch;
  beforeEach(() => {
    mockFetch = jest.spyOn(global, 'fetch').mockImplementation();
  });

  afterEach(() => {
    mockFetch.mockClear();
  });

  it('fetches the data', async () => {
    const { waitForNextUpdate } = renderHook(() =>
      useFetch('http://some-url', defaultOptions)
    );
    await waitForNextUpdate();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'http://some-url',
      defaultOptions
    );
  });

  it('fetches the data with custom options', async () => {
    const customOptions = { method: 'GET' };
    const { waitForNextUpdate } = renderHook(() =>
      useFetch('http://some-url', customOptions)
    );

    await waitForNextUpdate();

    expect(global.fetch).toHaveBeenCalledWith('http://some-url', {
      ...defaultOptions,
      ...customOptions,
    });
  });
});
