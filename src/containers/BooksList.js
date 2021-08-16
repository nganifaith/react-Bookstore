import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const selectBooks = (state) => state.books;
const BooksList = () => {
  const books = useSelector(selectBooks);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
