/* eslint-disable */
import { createStore, combineReducers } from 'redux';
import user from './app/AppReducer';

const intialState = {
  user: {
    isAuthenticated: false,
  },
};

const reducers = combineReducers({
  user,
});


const store = createStore(
  reducers,
  intialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
