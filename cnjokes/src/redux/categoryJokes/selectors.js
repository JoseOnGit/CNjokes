export const getCategories = (state) => state.categoryJokes.categories;
export const getSelectedCategory = (state) =>
  state.categoryJokes.selectedCategory;
export const getCategoriesLoading = (state) =>
  state.categoryJokes.categoriesAreLoading;
export const getCategoriesError = (state) =>
  state.categoryJokes.categoriesError;
export const getJokes = (state) => state.categoryJokes.jokes;
export const getJokesLoading = (state) => state.categoryJokes.jokesAreLoading;
export const getJokesError = (state) => state.categoryJokes.jokesError;
