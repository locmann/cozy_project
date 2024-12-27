import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config';
import { Theme } from '@/app/providers/themeProvider/lib/ThemeContext.ts';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
  args: { children: 'Text', theme: ButtonTheme.OUTLINE },
};

export const OutlineDark: Story = {
  args: { children: 'Text', theme: ButtonTheme.OUTLINE },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
