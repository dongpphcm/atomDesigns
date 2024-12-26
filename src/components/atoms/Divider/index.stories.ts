import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import Devider from "./index";


const meta = {
  title: "Example/Devider",
  component: Devider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Devider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { 
   },
  play: async ({ canvasElement }) => {
  },  
};
