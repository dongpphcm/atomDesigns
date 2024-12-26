import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import Skeleton from "./index";


const meta = {
  title: "Example/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // children: <div className="h-28 w-28" />
  },
  play: async ({ canvasElement }) => {
  },
};