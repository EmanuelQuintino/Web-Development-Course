const math = require('../src/mathFunctions');

const A = 10;
const B = 20;

test('Test A + B', () => {
    expect(math.sum(A, B)).toBe(30);
});

test('Test A - B', () => {
    expect(math.sub(A, B)).toBe(-10);
});

test('Test A * B', () => {
    expect(math.mul(A, B)).toBe(200);
});

test('Test A / B', () => {
    expect(math.div(A, B)).toBe(0.5);
});