import type { Meta, StoryObj } from "@storybook/react";
import { fn, within } from "@storybook/test";
import "@/app/variable.css";

import Box from "./index";
const meta = {
  title: "Example/Box",
  component: Box,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'Black',
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: '/order-box.png',
    radius: 'circle',
    children: "lorem ipsum lorem ipsum",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },  
};
