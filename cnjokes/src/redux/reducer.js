import { combineReducers } from 'redux';
import categoryReducer from './reducers/categoryReducer';
import searchReducer from './reducers/searchReducer';

const reducer = combineReducers({
  category: categoryReducer,
  search: searchReducer,
});

export default reducer;
