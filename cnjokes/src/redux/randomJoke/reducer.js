import {
  FETCH_RANDOM_JOKE,
  FETCH_RANDOM_JOKE_SUCCESS,
  FETCH_RANDOM_JOKE_FAILURE,
} from './actions';

const initialState = {
  joke: null,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_JOKE:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RANDOM_JOKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        joke: action.joke,
      };
    case FETCH_RANDOM_JOKE_FAILURE:
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
