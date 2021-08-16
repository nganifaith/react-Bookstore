import React from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createBook({
        title: e.target.title.value,
        category: e.target.categories.value,
      })
    );
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input required type="text" placeholder="Book title" name="title" />
      </label>
      <label htmlFor="categories">
        <select id="categories" name="categories" defaultValue={' '}>
          <option disabled value=" ">
            {' '}
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
