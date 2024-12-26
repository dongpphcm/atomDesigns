import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import Tabs from "./index";

const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { },
  play: async ({ canvasElement }) => {
  },
};
