import { counterTypes, counterOperations } from '../_duck/index';

describe('home / counter / duck / index', () => {
  test('should counterTypes and counterOperations exist', () => {
    expect(counterTypes).toBeDefined();
    expect(counterOperations).toBeDefined();
  });
});
