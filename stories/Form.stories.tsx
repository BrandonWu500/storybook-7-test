import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { expect } from "@storybook/jest";
import Form from "../components/Form/Form";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Example/Form",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitBtn = canvas.getByRole("button", { name: /Post question/i });
    expect(submitBtn).toBeInTheDocument();

    const emailInput = canvas.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const questionInput = canvas.getByRole("textbox", { name: /question/i });
    expect(questionInput).toBeInTheDocument();
  },
};

export const EmptySubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitBtn = canvas.getByRole("button", { name: /Post question/i });
    expect(submitBtn).toBeInTheDocument();

    await userEvent.click(submitBtn);

    expect(canvas.getByText(/enter your email/i)).toBeInTheDocument();
    expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitBtn = canvas.getByRole("button", { name: /Post question/i });
    const emailInput = canvas.getByRole("textbox", { name: /email/i });

    await userEvent.type(emailInput, "test");

    await userEvent.click(submitBtn);

    expect(
      canvas.getByText(/Please provide a valid email/i)
    ).toBeInTheDocument();
    expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

export const ValidInputs: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitBtn = canvas.getByRole("button", { name: /Post question/i });
    expect(submitBtn).toBeInTheDocument();

    const emailInput = canvas.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const questionInput = canvas.getByRole("textbox", { name: /question/i });
    expect(questionInput).toBeInTheDocument();

    await userEvent.type(emailInput, "test@test.com");
    await userEvent.type(questionInput, "test question");
    await userEvent.click(submitBtn);

    expect(canvas.getByRole("heading", { name: /Success/i }));
  },
};
