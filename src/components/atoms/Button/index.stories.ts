import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import "@/app/variable.css";

import Button from "./index";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Button/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Button/i });
    await expect(logoutButton).toBeInTheDocument();
  },  
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
  },
};
