export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CREATE_BOOK = 'CREATE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const generateId = () => Math.floor(Math.random() * 1000);

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: { ...book, id: generateId() },
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book.id,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
