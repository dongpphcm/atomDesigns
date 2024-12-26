import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import TitleSub from "./index";


const meta = {
  title: "Example/TitleSub",
  component: TitleSub,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TitleSub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Lorem'
  },
  play: async ({ canvasElement }) => {
  },
};
