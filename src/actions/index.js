export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CREATE_BOOK = 'CREATE_BOOK';

const generateId = () => Math.floor(Math.random() * 1000);

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: { ...book, id: generateId() },
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book.id,
});
