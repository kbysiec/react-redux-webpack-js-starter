import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import operations from '../_duck/operations';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home / counter / duck / operations', () => {
  test('should an operation incrementCounter exist', () => {
    expect(operations.incrementCounter).toBeDefined();
  });

  test('should dispatch an action with type INCREMENT_COUNTER', () => {
    const initialState = { counter: 0 };
    const store = mockStore(initialState);
    const expectedActions = [
      {
        type: 'INCREMENT_COUNTER',
        payload: 2,
      },
    ];
    store.dispatch(operations.incrementCounter(2) as any);
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
