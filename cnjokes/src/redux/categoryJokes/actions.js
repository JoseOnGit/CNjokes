import store from '../store';

import {
  JOKES_CATEGORIES,
  RANDOM_JOKE_QUERY,
  RANDOM_JOKES_FROM_CATEGORY,
} from '../../GlobalVariables';
import { fetchSearchedJokesError } from '../searchJokes/actions';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const SET_CATEGORY = 'SET_CATEGORY';
export const FETCH_JOKES_FROM_CATEGORY = 'FETCH_JOKES_FROM_CATEGORY';
export const FETCH_JOKES_FROM_CATEGORY_SUCCESS =
  'FETCH_JOKES_FROM_CATEGORY_SUCCESS';
export const FETCH_JOKES_FROM_CATEGORY_FAILURE =
  'FETCH_JOKES_FROM_CATEGORY_FAILURE';
export const SET_JOKES = 'SET_JOKES';

export const fetchCategories = () => {
  return {
    type: FETCH_CATEGORIES,
  };
};

export const fetchCategoriesSuccess = (categories, selectedCategory) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories: categories,
    selectedCategory: selectedCategory,
  };
};

export const fetchCategoriesError = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error: error,
  };
};

export const setCategory = (selectedCategory) => {
  return { type: SET_CATEGORY, selectedCategory: selectedCategory };
};

export const getCategories = () => (dispatch) => {
  dispatch(fetchCategories());
  fetch(JOKES_CATEGORIES)
    .then((response) => response.json())
    .then(
      (data) => {
        const responseDataCategories = store.getState().categoryJokes
          .categories;
        const updatedResponseDataCategories = responseDataCategories.concat(
          data,
        );

        dispatch(
          fetchCategoriesSuccess(
            updatedResponseDataCategories,
            responseDataCategories[0],
          ),
        );
      },
      (error) => {
        dispatch(fetchCategoriesError(error));
      },
    );
};

export const fetchJokesFromCategory = () => {
  return {
    type: FETCH_JOKES_FROM_CATEGORY,
  };
};

export const fetchJokesFromCategorySuccess = (jokes) => {
  return {
    type: FETCH_JOKES_FROM_CATEGORY_SUCCESS,
    jokes: jokes,
  };
};

export const fetchJokesFromCategoryError = (error) => {
  return {
    type: FETCH_JOKES_FROM_CATEGORY_FAILURE,
    error: error,
  };
};

export const setJokes = (jokes) => {
  return { type: SET_JOKES, jokes: jokes };
};

export const getJokesFromCategory = (selectedCategory) => (dispatch) => {
  dispatch(fetchJokesFromCategory);

  const url =
    selectedCategory === 'all'
      ? RANDOM_JOKE_QUERY
      : `${RANDOM_JOKES_FROM_CATEGORY}${selectedCategory}`;

  fetch(url)
    .then((response) => response.json())
    .then(
      (data) => {
        const responseDataJokes = store.getState().categoryJokes.jokes;
        const updatedJokes = [...responseDataJokes, data];
        dispatch(fetchJokesFromCategorySuccess(updatedJokes));
      },
      (error) => {
        dispatch(fetchSearchedJokesError(error));
      },
    );
};
