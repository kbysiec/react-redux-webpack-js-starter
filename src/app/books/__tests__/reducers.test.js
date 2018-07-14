import reducer from '../_duck/reducers';
import types from '../_duck/types';

jest.mock('../_duck/types', () => ({
  GET_DATA_REQUESTED: 'GET_DATA_REQUESTED',
  GET_DATA_DONE: 'GET_DATA_DONE',
  GET_DATA_FAILED: 'GET_DATA_FAILED',
}));

describe('books / duck / reducers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return the initial state', () => {
    const expectedState = {
      isLoading: false,
      books: [],
      error: null,
    };

    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  test('should handle GET_DATA_REQUESTED', () => {
    const expectedState = {
      isLoading: true,
      books: [],
      error: null,
    };

    expect(
      reducer(undefined, {
        type: types.GET_DATA_REQUESTED,
      }),
    ).toEqual(expectedState);

    expect(
      reducer(
        {
          isLoading: false,
        },
        {
          type: types.GET_DATA_REQUESTED,
        },
      ),
    ).toEqual(expectedState);
  });

  test('should handle GET_DATA_DONE', () => {
    const data = [{ name: 'John', surname: 'Smith' }];

    const expectedState = {
      isLoading: false,
      books: data,
      error: null,
    };

    expect(
      reducer(undefined, {
        type: types.GET_DATA_DONE,
        payload: data,
      }),
    ).toEqual(expectedState);

    expect(
      reducer(
        {
          books: [
            {
              name: 'Mark',
              surname: 'Brown',
            },
          ],
        },
        {
          type: types.GET_DATA_DONE,
          payload: data,
        },
      ),
    ).toEqual(expectedState);
  });

  test('should handle GET_DATA_FAILED', () => {
    const error = Error('Data fetching error...');

    const expectedState = {
      isLoading: false,
      books: [],
      error,
    };

    expect(
      reducer(undefined, {
        type: types.GET_DATA_FAILED,
        payload: error,
      }),
    ).toEqual(expectedState);

    expect(
      reducer(
        {
          books: [
            {
              name: 'Mark',
              surname: 'Brown',
            },
          ],
        },
        {
          type: types.GET_DATA_FAILED,
          payload: error,
        },
      ),
    ).toEqual(expectedState);
  });

  test('should not handle FAKE_ACTION', () => {
    const expectedState = {
      isLoading: false,
      books: [],
      error: null,
    };

    expect(reducer()).toEqual(expectedState);
  });
});
