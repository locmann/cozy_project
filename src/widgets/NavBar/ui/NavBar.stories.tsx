import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config';
import { Theme } from '@/app/providers/themeProvider/lib/ThemeContext.ts';
import { NavBar } from './NavBar';

const meta = {
  title: 'widget/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavBarLight: Story = {
  args: {},
};

export const NavBarDark: Story = {
  args: {},
};

NavBarDark.decorators = [ThemeDecorator(Theme.DARK)];
