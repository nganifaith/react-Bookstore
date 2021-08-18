import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducers from './reducers';
import './CSS/index.scss';
import './CSS/BookList.scss';
import './CSS/NavBar.scss';
import './CSS/BookForm.scss';
import './CSS/Book.scss';

const initialState = [
  { id: 1, title: 'Mama Ojo', category: 'Sci-Fi' },
  { id: 2, title: 'Alice in Wonderland', category: 'Kids' },
  { id: 4, title: 'Richest Man in Babylon', category: 'Learning' },
  { id: 6, title: 'Power of the mind', category: 'History' },
];

const store = createStore(rootReducers, { books: initialState });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
