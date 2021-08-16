import { combineReducers } from 'redux';
import BooksReducer from './books';

const reducers = combineReducers({
  books: BooksReducer,
});

export default reducers;
