import { Meta, StoryObj } from "@storybook/react";
import Light from "../components/Light/Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Example/Light",
  tags: ["autodocs"],
  argTypes: {
    fullWidth: {
      type: "boolean",
    },
    outline: {
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Light>;

export const Base: Story = {
  args: {},
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Red: Story = {
  args: {
    intent: "danger",
    ...FullWidth.args,
  },
};

export const Yellow: Story = {
  args: {
    intent: "secondary",
  },
};
