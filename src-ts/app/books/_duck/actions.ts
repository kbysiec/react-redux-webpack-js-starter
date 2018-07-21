import { BooksTypes, Book } from './types';

const getDataRequested = () => ({
  type: BooksTypes[BooksTypes.GET_DATA_REQUESTED],
});

const getDataDone = (data: Book[]) => ({
  type: BooksTypes[BooksTypes.GET_DATA_DONE],
  payload: data,
});

const getDataFailed = (error: Error) => ({
  type: BooksTypes[BooksTypes.GET_DATA_FAILED],
  payload: error,
});

export default {
  getDataRequested,
  getDataDone,
  getDataFailed,
};
