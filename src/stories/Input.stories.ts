import type { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/InputField";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Input",
  component: InputField,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder Text",
  },
};

export const WithText: Story = {
  args: {
    value: "Some text",
  },
};

export const Label: Story = {
  args: {
    label: "Name",
  },
};

export const Textarea: Story = {
  args: {
    type: "textarea",
  },
};
