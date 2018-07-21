import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import operations from '../_duck/operations';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let axiosMock: MockAdapter;

describe('books / duck / operations', () => {
  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });
  afterEach(() => {
    axiosMock.reset();
    axiosMock.restore();
  });

  test('should an operation getData exist', () => {
    expect(operations.getData).toBeDefined();
  });

  test(`should dispatch actions with types GET_DATA_REQUESTED and GET_DATA_DONE
        when fetching data has been successfully done`, () => {
    const expectedData = [{ name: 'John', surname: 'Smith' }];
    axiosMock
      .onGet('https://www.googleapis.com/books/v1/volumes?q=animals')
      .reply(200, {
        items: expectedData,
      });

    const initialState = {
      isLoading: false,
      books: [],
    };
    const store = mockStore(initialState);
    const expectedActions = [
      {
        type: 'GET_DATA_REQUESTED',
      },
      {
        type: 'GET_DATA_DONE',
        payload: expectedData,
      },
    ];
    expect.assertions(1);
    return store.dispatch(operations.getData() as any).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test(`should dispatch actions with types GET_DATA_REQUESTED and GET_DATA_FAILED
        when fetching data has been failed`, () => {
    axiosMock
      .onGet('https://www.googleapis.com/books/v1/volumes?q=animals')
      .reply(500);

    const initialState = {
      isLoading: false,
      books: [],
    };
    const store = mockStore(initialState);
    const expectedActions = [
      {
        type: 'GET_DATA_REQUESTED',
      },
      {
        type: 'GET_DATA_FAILED',
        payload: Error('Request failed with status code 500'),
      },
    ];
    expect.assertions(1);
    return store.dispatch(operations.getData() as any).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
