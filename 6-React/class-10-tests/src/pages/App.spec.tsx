import { expect, test } from "vitest";

function sumNumbers(a: number, b: number) {
  return a + b;
}

test("function sumNumbers(a, b)", () => {
  expect(sumNumbers(2, 3)).toBe(5);
});
