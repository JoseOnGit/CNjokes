export const FETCH_SEARCHED_JOKES = 'FETCH_SEARCHED_JOKES';
export const FETCH_SEARCHED_JOKES_SUCCESS = 'FETCH_SEARCHED_JOKES_SUCCESS';
export const FETCH_SEARCHED_JOKES_FAILURE = 'FETCH_SEARCHED_JOKES_FAILURE';

export const fetchSearchedJokes = () => {
  return {
    type: FETCH_SEARCHED_JOKES,
  };
};

export const fetchSearchedJokesSuccess = (searchedJokes) => {
  return {
    type: FETCH_SEARCHED_JOKES_SUCCESS,
    searchedJokes: searchedJokes,
  };
};

export const fetchProductsError = (error) => {
  return {
    type: FETCH_SEARCHED_JOKES_FAILURE,
    error: error,
  };
};
