import {
  FETCH_SEARCHED_JOKES,
  FETCH_SEARCHED_JOKES_SUCCESS,
  FETCH_SEARCHED_JOKES_FAILURE,
} from './actions';

const initialState = {
  error: null,
  isLoading: false,
  searchedJokes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCHED_JOKES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SEARCHED_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchedJokes: action.searchedJokes,
      };
    case FETCH_SEARCHED_JOKES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
