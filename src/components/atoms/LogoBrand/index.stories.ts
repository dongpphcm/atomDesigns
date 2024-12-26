import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import LogoBrand from "./index";


const meta = {
  title: "Example/LogoBrand",
  component: LogoBrand,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof LogoBrand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: '/giang-sinh.png'
  },
  play: async ({ canvasElement }) => {
  },
};