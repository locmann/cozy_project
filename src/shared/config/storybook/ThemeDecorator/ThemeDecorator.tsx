import { Theme } from '@/app/providers/themeProvider/lib/ThemeContext.ts';
import { Decorator } from '@storybook/react';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => (
    <div className={`app ${theme}`} style={{ minHeight: 'auto' }}>
      <Story />
    </div>
  );
