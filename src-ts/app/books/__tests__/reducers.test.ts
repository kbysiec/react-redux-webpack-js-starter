import reducer from '../_duck/reducers';
import { BooksTypes } from '../_duck/types';

jest.mock('../_duck/types', () => ({
  BooksTypes: {
    GET_DATA_REQUESTED: 'GET_DATA_REQUESTED',
    GET_DATA_DONE: 'GET_DATA_DONE',
    GET_DATA_FAILED: 'GET_DATA_FAILED',
  },
}));

describe('books / duck / reducers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle GET_DATA_REQUESTED', () => {
    const initialState = {
      isLoading: false,
      books: [],
      error: null,
    };

    const expectedState = {
      isLoading: true,
      books: [],
      error: null,
    };

    expect(
      reducer(undefined, {
        type: BooksTypes.GET_DATA_REQUESTED,
      }),
    ).toEqual(expectedState);

    expect(
      reducer(initialState, {
        type: BooksTypes.GET_DATA_REQUESTED,
      }),
    ).toEqual(expectedState);
  });

  test('should handle GET_DATA_DONE', () => {
    const data = [
      {
        id: '12ab',
        volumeInfo: {
          title: 'Animals Jungle',
          description: 'Animals Jungle description',
          imageLinks: {
            smallThumbnail: 'fakelink',
          },
        },
      },
    ];

    const initialState = {
      isLoading: false,
      books: [
        {
          id: 'wwwww',
          volumeInfo: {
            title: 'Lion Habits',
            description: 'Lion Habits description',
            imageLinks: {
              smallThumbnail: 'fakelink',
            },
          },
        },
      ],
      error: null,
    };

    const expectedState = {
      isLoading: false,
      books: data,
      error: null,
    };

    expect(
      reducer(undefined, {
        type: BooksTypes.GET_DATA_DONE,
        payload: data,
      }),
    ).toEqual(expectedState);

    expect(
      reducer(initialState, {
        type: BooksTypes.GET_DATA_DONE,
        payload: data,
      }),
    ).toEqual(expectedState);
  });

  test('should handle GET_DATA_FAILED', () => {
    const error = Error('Data fetching error...');

    const initialState = {
      isLoading: false,
      books: [
        {
          id: 'wwwww',
          volumeInfo: {
            title: 'Lion Habits',
            description: 'Lion Habits description',
            imageLinks: {
              smallThumbnail: 'fakelink',
            },
          },
        },
      ],
      error: null,
    };

    const expectedState = {
      error,
      isLoading: false,
      books: [],
    };

    expect(
      reducer(undefined, {
        type: BooksTypes.GET_DATA_FAILED,
        payload: error,
      }),
    ).toEqual(expectedState);

    expect(
      reducer(initialState, {
        type: BooksTypes.GET_DATA_FAILED,
        payload: error,
      }),
    ).toEqual(expectedState);
  });

  test('should not handle FAKE_ACTION', () => {
    const initialState = {
      isLoading: false,
      books: [],
      error: null,
    };

    const expectedState = initialState;

    expect(reducer(initialState, { type: 'FAKE_ACTION' })).toEqual(
      expectedState,
    );
  });
});
