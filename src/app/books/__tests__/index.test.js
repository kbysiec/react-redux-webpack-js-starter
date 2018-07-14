import { quotesTypes, quotesOperations } from '../_duck/index';

describe('books / duck / index', () => {
  test('should quotesTypes and quotesOperations exist', () => {
    expect(quotesTypes).toBeDefined();
    expect(quotesOperations).toBeDefined();
  });
});
