import type { Meta, StoryObj } from "@storybook/react";
import { fn, within } from "@storybook/test";
import "@/app/variable.css";

import BoxOval from "./index";

const meta = {
  title: "Example/BoxOval",
  component: BoxOval,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'Black',
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof BoxOval>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: '/order-box.png',
    // radius: 'circle'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },  
};
