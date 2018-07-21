import { booksTypes, booksOperations } from '../_duck/index';

describe('books / duck / index', () => {
  test('should booksTypes and booksOperations exist', () => {
    expect(booksTypes).toBeDefined();
    expect(booksOperations).toBeDefined();
  });
});
