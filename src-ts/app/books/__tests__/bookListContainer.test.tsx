import { mapStateToProps, mapDispatchToProps } from '../BookListContainer';
import operations from '../_duck/operations';

describe('books / container functions', () => {
  test('should mapStateToProps have expected props', () => {
    const initialState = {
      counter: { value: 0 },
      books: {
        isLoading: false,
        books: [],
        error: null,
      },
    };
    expect(mapStateToProps(initialState)).toEqual({
      isLoading: false,
      books: [],
      error: null,
    });
  });

  test('should mapDispatchToProps call sth', () => {
    const spy = jest.spyOn(operations, 'getData');
    const dispatch = jest.fn();
    const { getData } = mapDispatchToProps(dispatch);

    getData();
    expect(spy).toHaveBeenCalled();

    spy.mockReset();
    spy.mockRestore();
  });
});
