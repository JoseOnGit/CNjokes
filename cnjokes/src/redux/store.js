import { createStore } from 'redux';

// import reducer from './reducer';
import reducer from './reducers/searchReducer';

const store = createStore(reducer);

export default store;
