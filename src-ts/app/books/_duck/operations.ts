import axios from 'axios';
import { BooksThunkDispatch } from './types';
import actions from './actions';

const { getDataRequested, getDataDone, getDataFailed } = actions;

const getData = (): BooksThunkDispatch => (dispatch: BooksThunkDispatch) => {
  dispatch(getDataRequested());

  return axios
    .get('https://www.googleapis.com/books/v1/volumes?q=animals')
    .then(({ data }) => {
      dispatch(getDataDone(data.items));
    })
    .catch((error: Error) => {
      dispatch(getDataFailed(error));
    });
};

export default {
  getData,
};
