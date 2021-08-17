import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBook } from '../actions';

const BooksForm = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      createBook({
        title: e.target.title.value,
        category: e.target.categories.value,
      }),
    );
    e.target.reset();
  };
  return (
    <form onSubmit={handleChange}>
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
