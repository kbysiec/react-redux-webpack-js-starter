import { BooksTypes, booksOperations } from '../_duck';

describe('books / duck / index', () => {
  test('should quotesTypes and quotesOperations exist', () => {
    expect(BooksTypes).toBeDefined();
    expect(booksOperations).toBeDefined();
  });
});
