import { BooksTypes, booksOperations } from '../_duck';

describe('books / duck / index', () => {
  test('should booksTypes and booksOperations exist', () => {
    expect(BooksTypes).toBeDefined();
    expect(booksOperations).toBeDefined();
  });
});
