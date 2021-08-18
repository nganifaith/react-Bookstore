import { combineReducers } from 'redux';
import BooksReducer from './books';
import BookFilter from './filter';

const rootReducers = combineReducers({
  books: BooksReducer,
  filter: BookFilter,
});

export default rootReducers;
