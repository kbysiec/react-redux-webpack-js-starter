import { Reducer } from 'redux';
import { BooksTypes, BooksState } from './types';

const INITIAL_STATE: BooksState = {
  isLoading: false,
  books: [],
  error: null,
};

const booksReducer: Reducer<BooksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.GET_DATA_REQUESTED: {
      return {
        ...state,
        isLoading: true,
        books: [],
        error: null,
      };
    }
    case BooksTypes.GET_DATA_DONE: {
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: null,
      };
    }
    case BooksTypes.GET_DATA_FAILED: {
      return {
        ...state,
        isLoading: false,
        books: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
