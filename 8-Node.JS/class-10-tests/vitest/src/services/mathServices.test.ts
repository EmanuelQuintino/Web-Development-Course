import { test, expect, describe, it } from "vitest";
import { subNumbers, sumNumbers } from "./mathServices";

describe("test functions math", () => {
  test("should make a sum 2 + 3 = 5", () => {
    expect(sumNumbers(2, 3)).toEqual(5);
  });

  it("should make a subtraction 3 - 2 = 1", () => {
    expect(subNumbers(3, 2)).toEqual(1);
  });
});
