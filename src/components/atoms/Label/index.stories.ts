import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import Label from "./index";


const meta = {
  title: "Example/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label'
  },
  play: async ({ canvasElement }) => {
  },
};