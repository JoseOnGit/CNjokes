import * as actionTypes from '../actions';

const initialState = {
  error: false,
  isLoading: true,
  searchedJokes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCHED_JOKES:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_SEARCHED_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchedJokes: action.data,
      };
    case actionTypes.FETCH_SEARCHED_JOKES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      break;
  }
};

export default reducer;
