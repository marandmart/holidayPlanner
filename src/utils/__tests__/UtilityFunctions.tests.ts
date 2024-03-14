import {
  formatDateForViewing,
  formatDateForDatePicker,
  validateForm,
} from "../functions";

describe("formatDateForViewing", () => {
  test("formats date correctly for viewing", () => {
    const formattedDate = formatDateForViewing("2022-03-14");
    expect(formattedDate).toBe("14/03/2022");
  });
});

describe("formatDateForDatePicker", () => {
  test("formats date correctly for date picker", () => {
    const formattedDate = formatDateForDatePicker("2022-03-14");
    expect(formattedDate).toEqual(new Date(2022, 2, 14));
  });
});

describe("validateForm function", () => {
  test("returns error for missing fields submit", () => {
    const formData = {
      title: "",
      description: "Some description",
      startDate: "2024-03-14",
      endDate: "",
      locations: "Some locations",
      participants: "John Doe",
    };

    // @ts-ignore
    jest.spyOn(global, "FormData").mockImplementation(() => ({
      get: jest.fn((key: keyof typeof formData) => formData[key]),
    }));

    // @ts-ignore
    const { submitErrors } = validateForm(formData);
    expect(submitErrors.length).toEqual(2);
  });

  test("returns no errors for all fields filled", () => {
    const formData = {
      title: "Trip to Paris",
      description: "Some description",
      startDate: "2024-03-14",
      endDate: "2024-03-20",
      locations: "Paris, France",
      participants: "John Doe",
    };

    // @ts-ignore
    jest.spyOn(global, "FormData").mockImplementation(() => ({
      get: jest.fn((key: keyof typeof formData) => formData[key]),
    }));

    // @ts-ignore
    const { submitErrors } = validateForm(formData);
    expect(submitErrors.length).toEqual(0);
  });
});
