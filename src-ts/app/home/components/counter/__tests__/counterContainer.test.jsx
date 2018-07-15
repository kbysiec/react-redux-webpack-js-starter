import { mapStateToProps, mapDispatchToProps } from '../CounterContainer';
import operations from '../_duck/operations';

describe('home / counter / container functions', () => {
  test('should mapStateToProps have counter prop', () => {
    const initialState = { counter: 0 };
    expect(mapStateToProps(initialState)).toEqual(0);
  });

  test('should mapDispatchToProps call sth', () => {
    const spy = jest.spyOn(operations, 'incrementCounter');
    const dispatch = jest.fn();
    const { incrementCounter } = mapDispatchToProps(dispatch);

    incrementCounter(2);
    expect(spy).toHaveBeenCalled();

    spy.mockReset();
    spy.mockRestore();
  });
});
