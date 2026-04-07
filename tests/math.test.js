const { sum, multiply } = require('../math');

test('soma 2 + 3 deve ser 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('multiplicação 2 * 3 deve ser 6', () => {
  expect(multiply(2, 3)).toBe(5);
});