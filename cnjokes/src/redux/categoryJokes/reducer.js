import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_JOKES_FROM_CATEGORY,
  FETCH_JOKES_FROM_CATEGORY_SUCCESS,
  FETCH_JOKES_FROM_CATEGORY_FAILURE,
  SET_CATEGORY,
  SET_JOKES,
} from './actions';

const initialState = {
  categoriesError: null,
  categoriesAreLoading: false,
  categories: ['all'],
  selectedCategory: '',
  jokesError: null,
  jokesAreLoading: false,
  jokes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categoriesAreLoading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesAreLoading: false,
        categories: action.categories,
        selectedCategory: action.selectedCategory,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesAreLoading: false,
        categoriesError: action.error,
      };
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.selectedCategory,
      };
    case FETCH_JOKES_FROM_CATEGORY:
      return {
        ...state,
        jokesAreLoading: true,
      };
    case FETCH_JOKES_FROM_CATEGORY_SUCCESS:
      return {
        ...state,
        jokesAreLoading: false,
        jokes: action.jokes,
      };
    case FETCH_JOKES_FROM_CATEGORY_FAILURE:
      return {
        ...state,
        jokesAreLoading: false,
        jokesError: action.error,
      };
    case SET_JOKES:
      return {
        ...state,
        jokes: action.jokes,
      };

    default:
      return state;
  }
};

export default reducer;
