import PropTypes from 'prop-types';
import categoryData from '../categoryData';

const CatergoryFilter = ({ handleFilterChange }) => (
  <label htmlFor="category">
    Filter By Category
    <select
      id="category"
      name="category"
      defaultValue=""
      onChange={(e) => handleFilterChange(e.target.value)}
    >
      <option value="">ALL</option>
      {categoryData.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </label>
);

CatergoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
export default CatergoryFilter;
