import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Component <Button/>", () => {
  const { getByText, getByRole } = render(<Button name="test" disabled={true} />);
  const button = getByRole("button") as HTMLButtonElement;

  it("Should be render", async () => {
    expect(getByText("test")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
  });

  it("Should be disabled", async () => {
    const isDisabled = button.disabled;
    expect(isDisabled).toBe(true);
  });

  it("Should be color green", async () => {
    const color = button.style.color;
    expect(color).toBe("green");
  });
});
