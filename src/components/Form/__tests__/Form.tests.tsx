import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/react";
import Form from "../";

describe("Form component", () => {
  test("renders children correctly", () => {
    const { getByTestId } = render(
      <Form>
        <input type="text" data-testid="test-input" />
        <button type="submit">Test</button>
      </Form>
    );
    expect(getByTestId("test-input")).toBeInTheDocument();
  });

  test("calls onSubmit callback when form is submitted", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <Form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit" data-testid="submit-button">
          Submit
        </button>
      </Form>
    );
    fireEvent.submit(getByTestId("submit-button"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
