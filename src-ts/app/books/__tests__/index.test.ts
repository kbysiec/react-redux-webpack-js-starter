import { BooksTypes, booksOperations } from '../_duck/index';

describe('books / duck / index', () => {
  test('should quotesTypes and quotesOperations exist', () => {
    expect(BooksTypes).toBeDefined();
    expect(booksOperations).toBeDefined();
  });
});
