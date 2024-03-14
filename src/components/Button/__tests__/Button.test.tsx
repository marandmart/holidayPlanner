// Button.test.tsx
import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/react";
import Button from "../";

describe("Button component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click event", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with specified type", () => {
    const { container } = render(<Button type="submit">Submit</Button>);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it("renders with primary variation", () => {
    const { container } = render(<Button variation="primary">Primary</Button>);
    const buttonElement = container.querySelector("button");
    // "#2563EB" in rgb => rgb(37, 99, 235)
    expect(buttonElement).toHaveStyle({
      backgroundColor: "/rgb(37,s*99,s*235)/",
    });
  });

  it("renders with secondary variation", () => {
    const { container } = render(
      <Button variation="secondary">Secondary</Button>
    );
    const buttonElement = container.querySelector("button");
    // #0ab6eb in rgb => rgb(10, 182, 235)
    expect(buttonElement).toHaveStyle({
      backgroundColor: "/rgb(10,s*182,s*235)/",
    });
  });
});
