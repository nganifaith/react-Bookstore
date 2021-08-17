import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CatergoryFilter from '../components/CategoryFilter';

const selectBooks = (state) => {
  if (!state.filter) {
    return state.books;
  }
  return state.books.filter((book) => book.category === state.filter);
};
const BooksList = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };
  const handleChangeFilter = (filter) => {
    dispatch(changeFilter(filter));
  };
  return (
    <div>
      <CatergoryFilter handleFilterChange={handleChangeFilter} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book
              book={book}
              key={book.id}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
