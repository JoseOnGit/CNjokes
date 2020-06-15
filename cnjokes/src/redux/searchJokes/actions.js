import { SEARCH_JOKES_QUERY } from '../../GlobalVariables';

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

export const fetchSearchedJokesError = (error) => {
  return {
    type: FETCH_SEARCHED_JOKES_FAILURE,
    error: error,
  };
};

export const fetchJokes = (searchPhrase) => (dispatch) => {
  dispatch(fetchSearchedJokes());
  fetch(`${SEARCH_JOKES_QUERY}${searchPhrase}`)
    .then((response) => response.json())
    .then(
      ({ result }) => {
        dispatch(fetchSearchedJokesSuccess(result));
      },
      (error) => {
        dispatch(fetchSearchedJokesError(error));
      },
    );
};
