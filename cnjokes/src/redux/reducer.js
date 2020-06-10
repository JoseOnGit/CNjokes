import { combineReducers } from 'redux';

import searchReducer from './searchJokes/reducer';
import categoryReducer from './categoryJokes/reducer';

const rootReducer = combineReducers({
  search: searchReducer,
  category: categoryReducer,
});

export default rootReducer;
