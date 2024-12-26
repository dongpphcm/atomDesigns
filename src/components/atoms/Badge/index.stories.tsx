import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import Badge from "./index";
import LogoImage from "../LogoImage";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Button/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Button/i });
    await expect(logoutButton).toBeInTheDocument();
  },  
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: <LogoImage src="/order-box.png" style={{width: '2em', height: '2em'}}/>,
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
