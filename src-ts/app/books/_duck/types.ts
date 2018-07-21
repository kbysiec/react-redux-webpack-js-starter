import { ThunkDispatch } from 'redux-thunk';

export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
};

export interface BooksState {
  readonly isLoading: boolean;
  readonly books: Book[];
  readonly error: Error | null;
}

export enum BooksTypes {
  GET_DATA_REQUESTED = 'GET_DATA_REQUESTED',
  GET_DATA_DONE = 'GET_DATA_DONE',
  GET_DATA_FAILED = 'GET_DATA_FAILED',
}

type BooksActionType = {
  type: BooksTypes;
};

export type BooksThunkDispatch = ThunkDispatch<
  BooksState,
  undefined,
  BooksActionType
>;
