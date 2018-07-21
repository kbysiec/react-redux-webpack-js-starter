import actions from '../_duck/actions';
import { BooksTypes, Book } from '../_duck/types';

jest.mock('../_duck/types', () => ({
  BooksTypes: {
    GET_DATA_REQUESTED: 'GET_DATA_REQUESTED',
    GET_DATA_DONE: 'GET_DATA_DONE',
    GET_DATA_FAILED: 'GET_DATA_FAILED',
  },
}));

describe('books / duck / actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should an action get data requested exist', () => {
    expect(actions.getDataRequested).toBeDefined();
  });

  test('should an action get data done exist', () => {
    expect(actions.getDataDone).toBeDefined();
  });

  test('should an action get data failed exist', () => {
    expect(actions.getDataFailed).toBeDefined();
  });

  test('should create an action with type GET_DATA_REQUESTED', () => {
    const expectedAction = {
      type: BooksTypes.GET_DATA_REQUESTED,
    };
    expect(actions.getDataRequested()).toEqual(expectedAction);
  });

  test('should create an action with type GET_DATA_DONE', () => {
    const data: Book[] = [
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

    const expectedAction = {
      type: BooksTypes.GET_DATA_DONE,
      payload: data,
    };
    expect(actions.getDataDone(data)).toEqual(expectedAction);
  });

  test('should create an action with type GET_DATA_FAILED', () => {
    const error = new Error('Fetching data error');

    const expectedAction = {
      type: BooksTypes.GET_DATA_FAILED,
      payload: error,
    };
    expect(actions.getDataFailed(error)).toEqual(expectedAction);
  });
});
