const multiplicar = require('../js/multiplicar');

test('multiplicar 1 * 2 é = 2', () => {
  expect(multiplicar(1, 2)).toBe(2);
});

test('multiplicar -2 * 2 é = -4', () => {
    expect(multiplicar(-2, 2)).toBe(-4);
});

  test('multiplicar 0 * 0 é = 0', () => {
    expect(multiplicar(0, 0)).toBe(0);
});

test('multiplicar -2 * -2 é = 4', () => {
    expect(multiplicar(-2, -2)).toBe(4);
});