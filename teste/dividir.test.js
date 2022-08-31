const dividir = require('../js/dividir');

test('dividir 4 / 2 é = 2', () => {
  expect(dividir(4, 2)).toBe(2);
});

test('dividir -4 / 2 é = -2', () => {
    expect(dividir(-4, 2)).toBe(-2);
});

test('dividir 0 / 0 é = 0', () => {
    expect(dividir(0, 0)).toBe(NaN);
});