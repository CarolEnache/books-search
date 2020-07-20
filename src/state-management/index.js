export const initialState = {
  searchValue: '',
  pageValue: 1,
  response: {},
  history: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case 'SET_PAGE_VALUE':
      return {
        ...state,
        pageValue: action.page,
      };
    case 'SET_RESPONSE':
      return {
        ...state,
        response: action.response,
      };
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.history,
      };
    default:
      return state;
  }
};
