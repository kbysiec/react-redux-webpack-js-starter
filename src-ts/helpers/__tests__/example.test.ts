import { sum, subtract } from '../exampleHelpers';

it('should add 1 + 2', () => {
  expect(sum(1, 2)).toBe(3);
});

it('should subtract 2 from 3', () => {
  expect(subtract(3, 2)).toBe(1);
});
