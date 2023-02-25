const evenOrOdd = require('../src/evenOrOdd');

const numEven = 10;
const numOdd = 11;

test("Check num Even", () => {
    expect(evenOrOdd.check(numEven)).toBe("even");
});

test("Check num Odd", () => {
    expect(evenOrOdd.check(numOdd)).toBe("odd");
});