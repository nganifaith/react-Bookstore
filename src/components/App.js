import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import NavBar from '../containers/NavBar';

const App = () => (
  <div className="App">
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
