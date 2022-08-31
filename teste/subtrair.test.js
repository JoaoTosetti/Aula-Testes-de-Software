const subtrair = require('../js/subtrair');

test('subtrair 8 - 2 é = 6', () => {
  expect(subtrair(8, 2)).toBe(6);
});

test('subtrair 8 - 12 é = 6', () => {
    expect(subtrair(8, 12)).toBe(-4);
});

test('subtrair 0 - 0 é = 0', () => {
    expect(subtrair(0, 0)).toBe(0);
});