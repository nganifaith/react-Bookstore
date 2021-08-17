import { CHANGE_FILTER } from '../actions';

const BookFilter = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default BookFilter;
