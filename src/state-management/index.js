export const initialState = {
  searchValue: '',
  response: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case 'SET_RESPONSE':
      return {
        ...state,
        response: action.response,
      };
    default:
      return state;
  }
};
