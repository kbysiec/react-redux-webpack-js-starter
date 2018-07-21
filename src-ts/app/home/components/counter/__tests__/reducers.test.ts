import reducer from '../_duck/reducers';
import { CounterTypes } from '../_duck/types';

jest.mock('../_duck/types', () => ({
  CounterTypes: {
    INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  },
}));

describe('home / counter / duck / reducers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle INCREMENT_COUNTER', () => {
    expect(
      reducer(undefined, {
        type: CounterTypes.INCREMENT_COUNTER,
        payload: 2,
      }),
    ).toEqual({
      value: 2,
    });

    expect(
      reducer(
        { value: 0 },
        {
          type: CounterTypes.INCREMENT_COUNTER,
          payload: 2,
        },
      ),
    ).toEqual({
      value: 2,
    });
  });

  test('should not handle FAKE_ACTION', () => {
    expect(reducer({ value: 0 }, { type: 'FAKE_ACTION' })).toEqual({
      value: 0,
    });
  });
});
