import { combineReducers } from 'redux';
import booksReducer from './app/books/_duck';
import counterReducer from './app/home/components/counter/_duck';

const rootReducer = combineReducers({
  books: booksReducer,
  counter: counterReducer,
});

export default rootReducer;
