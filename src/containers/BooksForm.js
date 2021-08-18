import React from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';
import categoryData from '../categoryData';

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
    <>
      <span className="vertical-line-1" />
      <div className="form-container">
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={handleChange} className="form">
          <label htmlFor="title">
            <input
              required
              type="text"
              className="form-control book-title"
              placeholder="Book title"
              name="title"
            />
          </label>
          <label htmlFor="categories">
            <select
              id="categories"
              name="categories"
              className="book-category"
              defaultValue={' '}
            >
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
          <input type="submit" value="Add Book" className="submit-button" />
        </form>
      </div>
    </>
  );
};

export default BooksForm;
