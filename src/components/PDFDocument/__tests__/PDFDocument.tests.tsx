import { Document, Page, View } from "@react-pdf/renderer";
import { render } from "@testing-library/react";
import PDFDocument from "..";
import { ITravelPlan } from "../../../interfaces/ITravelPlan";

jest.mock("@react-pdf/renderer", () => ({
  Document: jest.fn().mockImplementation(({ children }) => children),
  Page: jest.fn().mockImplementation(({ children }) => children),
  Text: jest.fn().mockImplementation(({ children }) => children),
  View: jest.fn().mockImplementation(({ children }) => children),
  StyleSheet: {
    create: jest.fn((styles) => styles),
  },
}));

const mockData: ITravelPlan[] = [
  {
    id: "1",
    title: "Trip to Paris",
    description: "Visiting famous landmarks",
    startDate: "2024-03-20",
    endDate: "2024-03-25",
    locations: "Paris, France",
    participants: "John Doe, Jane Smith",
  },
  {
    id: "2",
    title: "Vacation in Hawaii",
    description: "Relaxing on the beach",
    startDate: "2024-04-10",
    endDate: "2024-04-15",
    locations: "Hawaii, USA",
    participants: "Alice Johnson, Bob Brown",
  },
];

describe("PDFDocument component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders PDF document with correct content", () => {
    render(<PDFDocument data={mockData} />);

    // Expect Document to be rendered
    expect(Document).toHaveBeenCalledTimes(1);

    // Expect correct number of pages to be rendered
    expect(Page).toHaveBeenCalledTimes(1);

    // Expect content to be rendered on each page
    expect(View).toHaveBeenCalledTimes(2);
  });
});
