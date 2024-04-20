function sumNumbers(num1: number, num2: number) {
  return num1 + num2;
}

test("should make a sum 2 + 3 = 5", () => {
  expect(sumNumbers(2, 3)).toEqual(5);
});
