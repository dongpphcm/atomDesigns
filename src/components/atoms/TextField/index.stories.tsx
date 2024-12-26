import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import TextField from "./index";

const meta = {
  title: "Example/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { },
  play: async ({ canvasElement }) => {
  },
};
