import type { Meta, StoryObj } from "@storybook/react";
import PlanCard from "../components/PlanCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PlanCard",
  component: PlanCard,
  tags: ["autodocs"],
  args: {
    id: "1",
    title: "Ferias",
    description: "Descrição das férias",
    startDate: "2024-03-12",
    endDate: "2024-05-20",
    locations: "Maceio, Curitiba",
    participants: "Pedro, João",
  },
} satisfies Meta<typeof PlanCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Card: Story = {
  args: {
    id: "1",
    title: "Ferias",
    description: "Descrição das férias",
    startDate: "2024-03-12",
    endDate: "2024-05-20",
    locations: "Maceio, Porto Alegre",
    participants: "Pedro, João",
  },
};
