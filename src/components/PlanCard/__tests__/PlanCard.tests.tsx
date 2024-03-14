import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/react";
import PlanCard from "..";

const mockPlan = {
  id: "1",
  title: "Trip to Paris",
  description: "Visiting famous landmarks",
  startDate: "2024-03-20",
  endDate: "2024-03-25",
  locations: "Paris, France",
  participants: "John Doe, Jane Smith",
};

describe("PlanCard component", () => {
  test("renders card with data", () => {
    const { getByText } = render(<PlanCard {...mockPlan} />);
    expect(getByText("Trip to Paris")).toBeInTheDocument();
    expect(getByText("Visiting famous landmarks")).toBeInTheDocument();
    expect(getByText("Start date: 20/03/2024")).toBeInTheDocument();
    expect(getByText("End date: 25/03/2024")).toBeInTheDocument();
    expect(getByText("Locations: Paris, France")).toBeInTheDocument();
    expect(getByText("Participants: John Doe, Jane Smith")).toBeInTheDocument();
  });

  test("does not render participants if there are none", () => {
    const { queryByText } = render(<PlanCard {...mockPlan} participants="" />);
    expect(queryByText("Participants:")).toBeNull();
  });

  test("renders two buttons when editingMode is true", () => {
    const { container } = render(<PlanCard {...mockPlan} editingMode />);
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(2);
  });

  test("calls edit handler when edit button is clicked", () => {
    const handleEdit = jest.fn();
    const { container } = render(
      <PlanCard {...mockPlan} editingMode handleEditButton={handleEdit} />
    );
    const buttons = container.querySelectorAll("button");
    fireEvent.click(buttons[0]);
    expect(handleEdit).toHaveBeenCalledWith("1");
  });

  test("calls delete handler when delete button is clicked", () => {
    const handleDelete = jest.fn();
    const { container } = render(
      <PlanCard {...mockPlan} editingMode handleDeleteButton={handleDelete} />
    );
    const buttons = container.querySelectorAll("button");
    fireEvent.click(buttons[1]);
    expect(handleDelete).toHaveBeenCalledWith("1");
  });
});
