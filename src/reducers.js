import { combineReducers } from 'redux';
import user from './user/userReducers';

const mainReducer = combineReducers({
  user,
});

export default mainReducer;
