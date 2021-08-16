import { combineReducers } from 'redux';
import BooksReducer from './books';

const rootReducers = combineReducers({
  books: BooksReducer,
});

export default rootReducers;
