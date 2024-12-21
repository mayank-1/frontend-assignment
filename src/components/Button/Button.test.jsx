import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Button from "./index"; // Path to your Button component

describe("Button", () => {
  it("renders correctly with default props", () => {
    render(<Button onClick={() => {}} children="Click me" />);
    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("renders correctly with disabled prop", () => {
    render(<Button onClick={() => {}} disabled children="Click me" />);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("renders correctly with active prop", () => {
    render(<Button onClick={() => {}} active children="Click me" />);
    expect(screen.getByRole("button")).toHaveClass("active");
    expect(screen.getByRole("button")).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("renders correctly with label prop", () => {
    render(
      <Button onClick={() => {}} label="Submit Form" children="Click me" />
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Submit Form"
    );
    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} children="Click me" />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled children="Click me" />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
