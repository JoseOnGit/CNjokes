import { combineReducers } from 'redux';

import searchJokesReducer from './searchJokes/reducer';
import categoryJokesReducer from './categoryJokes/reducer';
import randomJokeReducer from './randomJoke/reducer';

const rootReducer = combineReducers({
  searchJokes: searchJokesReducer,
  categoryJokes: categoryJokesReducer,
  randomJokes: randomJokeReducer,
});

export default rootReducer;
