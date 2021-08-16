import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Title:
      <input type="text" placeholder="Book title" name="title" />
    </label>
    <label htmlFor="categories">
      <select id="categories" name="categories">
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

export default BooksForm;
