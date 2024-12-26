import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import Dropdown from "./index";


const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { },
  play: async ({ canvasElement }) => {
  },
};