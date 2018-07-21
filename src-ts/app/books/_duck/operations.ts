import axios from 'axios';
import { BooksThunkDispatch, Book } from './types';
import actions from './actions';

const { getDataRequested, getDataDone, getDataFailed } = actions;

const getData = (): BooksThunkDispatch => (dispatch: BooksThunkDispatch) => {
  dispatch(getDataRequested());

  return (
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=animals')
      // .then(response => response.json())
      .then(({ data }) => {
        dispatch(getDataDone(data.items));
      })
      .catch((error: Error) => {
        dispatch(getDataFailed(error));
      })
  );
};

export default {
  getData,
};
