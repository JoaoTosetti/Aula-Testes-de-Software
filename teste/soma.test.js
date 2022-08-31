const somar = require('../js/soma');

test('somar 1 + 2 é = 3', () => {
  expect(somar(1, 2)).toBe(3);
});

test('somar 0 + 0 é = 0', () => {
  expect(somar(0, 0)).toBe(0);
});

test('somar (-4) + (-8) é = (-12)', () => {
  expect(somar(-4, -8)).toBe(-12);
});
