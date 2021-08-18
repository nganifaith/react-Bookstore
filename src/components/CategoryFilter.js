import PropTypes from 'prop-types';
import categoryData from '../categoryData';

const CatergoryFilter = ({ handleFilterChange }) => (
  <select
    id="category"
    name="category"
    placeholder="Catergory"
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
);

CatergoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
export default CatergoryFilter;
