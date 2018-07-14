import types from './types';

const INITIAL_STATE = {
  isLoading: false,
  books: [],
  error: null,
};

const booksReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.GET_DATA_REQUESTED: {
      return {
        ...state,
        isLoading: true,
        books: [],
        error: null,
      };
    }
    case types.GET_DATA_DONE: {
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: null,
      };
    }
    case types.GET_DATA_FAILED: {
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
