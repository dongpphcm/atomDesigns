import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@/app/variable.css";

import LogoImage from "./index";

const meta = {
  title: "Example/LogoImage",
  component: LogoImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof LogoImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "/giang-sinh.png",
    borderColor: "orange",
    hoverBorderColor: "blue",
    shadow: false,
    border: true,
    radius: 5,
  },
  play: async ({ canvasElement }) => {},
};
