import booksReducer from '../app/books/_duck';
import counterReducer from '../app/home/components/counter/_duck';

describe('app / reducers', () => {
  test('should booksReducer and counterReducer exist', () => {
    expect(booksReducer).toBeDefined();
    expect(counterReducer).toBeDefined();
  });
});
