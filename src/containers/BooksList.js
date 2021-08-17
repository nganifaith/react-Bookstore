import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

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

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
      ))}
    </div>
  );
};

export default BooksList;
