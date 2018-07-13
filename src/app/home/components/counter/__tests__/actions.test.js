import actions from '../_duck/actions';
import types from '../_duck/types';

jest.mock('../_duck/types', () => ({
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
}));

describe('home / counter / duck / actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should an action incrementCounter exist', () => {
    expect(actions.incrementCounter).toBeDefined();
  });

  test('should create an action with type INCREMENT_COUNTER', () => {
    const expectedAction = {
      type: types.INCREMENT_COUNTER,
      payload: 2,
    };
    expect(actions.incrementCounter(2)).toEqual(expectedAction);
  });
});
