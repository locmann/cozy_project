import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeContextDecorator } from '@/shared/config';
import { Theme } from '@/app/providers/themeProvider/lib/ThemeContext.ts';
import { SideBar } from './SideBar';

const meta = {
  title: 'widget/SideBar',
  component: SideBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SideBarLight: Story = {
  args: {},
};

SideBarLight.decorators = [ThemeContextDecorator(Theme.LIGHT)];

export const SideBarDark: Story = {
  args: {},
};

SideBarDark.decorators = [ThemeContextDecorator(Theme.DARK)];
