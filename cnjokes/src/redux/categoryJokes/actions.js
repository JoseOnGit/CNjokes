import store from '../store';

import { JOKES_CATEGORIES } from '../../GlobalVariables';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

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

export const getCategories = () => (dispatch) => {
  dispatch(fetchCategories());
  fetch(JOKES_CATEGORIES)
    .then((response) => response.json())
    .then(
      (data) => {
        const responseDataCategories = store.getState().category.categories;
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
