import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import Slider from "./index";

const meta = {
  title: "Example/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { },
  play: async ({ canvasElement }) => {
  },
};
