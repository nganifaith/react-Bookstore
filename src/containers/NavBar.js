import { useDispatch } from 'react-redux';
import { IoIosPerson } from 'react-icons/io';
import { changeFilter } from '../actions';
import CatergoryFilter from '../components/CategoryFilter';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = (filter) => {
    dispatch(changeFilter(filter));
  };
  return (
    <header>
      <div className="header-text">
        <h1 className="bookstore-cms">BookStore CMS</h1>
        <p className="books">BOOKS</p>
        <p className="categories">CATEGORIES</p>
        <CatergoryFilter handleFilterChange={handleChangeFilter} />
      </div>
      <i className="oval">
        <IoIosPerson />
      </i>
    </header>
  );
};

export default NavBar;
