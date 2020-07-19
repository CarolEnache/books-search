export const initialState = {
  searchValue: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue,
      };
    default:
      return state;
  }
};
