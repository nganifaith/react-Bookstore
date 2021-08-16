export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CREATE_BOOK = 'CREATE_BOOK';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: { ...book, id: Math.random() },
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book.id,
});
