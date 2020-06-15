import { RANDOM_JOKE_QUERY } from '../../GlobalVariables';

export const FETCH_RANDOM_JOKE = 'FETCH_RANDOM_JOKE';
export const FETCH_RANDOM_JOKE_SUCCESS = 'FETCH_RANDOM_JOKE_SUCCESS';
export const FETCH_RANDOM_JOKE_FAILURE = 'FETCH_RANDOM_JOKE_FAILURE';

export const fetchRandomJoke = () => {
  return {
    type: FETCH_RANDOM_JOKE,
  };
};

export const fetchRandomJokeSuccess = (joke) => {
  return {
    type: FETCH_RANDOM_JOKE_SUCCESS,
    joke: joke,
  };
};

export const fetchRandomJokeError = (error) => {
  return {
    type: FETCH_RANDOM_JOKE_FAILURE,
    error: error,
  };
};

export const fetchJoke = () => (dispatch) => {
  dispatch(fetchRandomJoke());
  fetch(RANDOM_JOKE_QUERY)
    .then((response) => response.json())
    .then(
      (data) => {
        dispatch(fetchRandomJokeSuccess(data));
      },
      (error) => {
        dispatch(fetchRandomJokeError(error));
      },
    );
};
