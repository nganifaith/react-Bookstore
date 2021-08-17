import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducers from './reducers';

const initialState = [
  { id: 1, title: 'Mama Ojo', category: 'Sci-Fi' },
  { id: 2, title: 'Alice in Wonderland', category: 'Kids' },
];
const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const store = createStore(rootReducers, { books: initialState, categories });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
