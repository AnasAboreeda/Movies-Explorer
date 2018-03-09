import { combineReducers } from 'redux';
import movies from './movies';

// Here I have used combineReducers -with one reducer- to make it easier to add
// more reduces in the future
export default combineReducers({
  movies,
});
