import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import "@/app/variable.css";

import Carousel, { ItemImageCarousel } from "./index";

  const list: Array<ItemImageCarousel> = [
    {
      title: "giang sinh",
      alt: "giang sinh",
      src: "/giang-sinh.png",
    },
    {
      title: "giang sinh",
      alt: "giang sinh",
      src: "/giang-sinh.png",
    },
    {
      title: "giang sinh",
      alt: "giang sinh",
      src: "/giang-sinh.png",
    },
  ];

const meta = {
  title: "Example/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    list,
    
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