import { CounterTypes, counterOperations } from '../_duck';

describe('home / counter / duck / index', () => {
  test('should counterTypes and counterOperations exist', () => {
    expect(CounterTypes).toBeDefined();
    expect(counterOperations).toBeDefined();
  });
});
