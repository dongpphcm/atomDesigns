import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '@/app/variable.css';

import Link from './index';


const meta = {
  title: 'Example/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },  
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: '/',
    children: 'Lorem'
  },
  play: async ({ canvasElement }) => {
  },
};