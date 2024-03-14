import { render, fireEvent, RenderResult } from "@testing-library/react";
import InputField from "../";
import "@testing-library/jest-dom";

describe("InputField component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<InputField label="Test" />);
  });

  test("renders input field correctly", () => {
    const inputElement = component.getByLabelText("Test") as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe("INPUT");
  });

  test("renders textarea field correctly", () => {
    component.rerender(<InputField label="Test" type="textarea" />);
    const textareaElement = component.getByLabelText(
      "Test"
    ) as HTMLTextAreaElement;
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.tagName).toBe("TEXTAREA");
  });

  test("calls onChange callback when input value changes", () => {
    const INPUT_VALUE = "test input";
    const INPUT_LABEL = "Test";

    const handleChange = jest.fn();
    component.rerender(
      <InputField label={INPUT_LABEL} onChange={handleChange} />
    );
    const inputElement = component.getByLabelText(
      INPUT_LABEL
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: INPUT_VALUE } });
    expect(handleChange).toHaveBeenCalledWith(INPUT_VALUE);
  });

  test("calls onChange callback when textarea value changes", () => {
    const INPUT_VALUE = "test textarea";

    const handleChange = jest.fn();
    component.rerender(
      <InputField label="Test" type="textarea" onChange={handleChange} />
    );
    const textareaElement = component.getByLabelText(
      "Test"
    ) as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: INPUT_VALUE } });
    expect(handleChange).toHaveBeenCalledWith(INPUT_VALUE);
  });
});
