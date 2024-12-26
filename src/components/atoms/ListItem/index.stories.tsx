import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import ListItem, { IItem } from "./index";

const list: Array<IItem> = [
  {
    children: <img src={'/product-review-star-active.svg'} alt={'product-review-star-active.svg'} sizes="4"/>
  },
  {
    children: <img src={'/product-review-star-active.svg'} alt={'product-review-star-active.svg'} sizes="4"/>
  },
  {
    children: <img src={'/product-review-star-active.svg'} alt={'product-review-star-active.svg'} sizes="4"/>
  },
  {
    children: <img src={'/product-review-star-active.svg'} alt={'product-review-star-active.svg'} sizes="4"/>
  },
  {
    children: <img src={'/product-review-star-active.svg'} alt={'product-review-star-active.svg'} sizes="4"/>
  }
]

const meta = {
  title: "Example/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof ListItem>;
ListItem
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    list
  },
  play: async ({ canvasElement }) => {
  },
};
