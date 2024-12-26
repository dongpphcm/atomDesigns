import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import Checkbox, { IItem } from "./index";

const list: Array<IItem> = [
  {
label: 'isCheck',
value: 'isCheck'
  }
]

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { 
    list
   },
  play: async ({ canvasElement }) => {
  },  
};
