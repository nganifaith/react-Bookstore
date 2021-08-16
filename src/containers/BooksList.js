import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const selectBooks = (state) => state.books;
const BooksList = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <div>
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
