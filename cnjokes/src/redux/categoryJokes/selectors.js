export const getCategories = (state) => state.category.categories;
export const getSelectedCategory = (state) => state.category.selectedCategory;
export const getCategoriesLoading = (state) =>
  state.category.categoriesAreLoading;
export const getCategoriesError = (state) => state.category.categoriesError;
export const getJokes = (state) => state.category.jokes;
export const getJokesLoading = (state) => state.category.jokesAreLoading;
export const getJokesError = (state) => state.category.jokesError;
