import React from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';
import categoryData from '../categoryData';
import '../css/bookForm.css';

const BooksForm = () => {
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
    <div className="add_form">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleChange} className="add_book">
        <label htmlFor="title">
          <input required type="text" placeholder="Book title" name="title" />
        </label>
        <label htmlFor="categories">
          <select id="categories" name="categories" defaultValue={' '}>
            <option disabled value=" ">
              {' '}
            </option>
            {categoryData.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BooksForm;
