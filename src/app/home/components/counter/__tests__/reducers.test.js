import reducer from '../_duck/reducers';
import types from '../_duck/types';

jest.mock('../_duck/types', () => ({
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
}));

describe('home / counter / duck / reducers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return the initial state', () => {
    const expectedState = {
      counter: 0,
    };

    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  test('should handle INCREMENT_COUNTER', () => {
    expect(
      reducer(undefined, {
        type: types.INCREMENT_COUNTER,
        payload: 2,
      }),
    ).toEqual({
      counter: 2,
    });

    expect(
      reducer(
        { counter: 0 },
        {
          type: types.INCREMENT_COUNTER,
          payload: 2,
        },
      ),
    ).toEqual({
      counter: 2,
    });
  });

  test('should not handle FAKE_ACTION', () => {
    expect(reducer()).toEqual({
      counter: 0,
    });
  });
});
