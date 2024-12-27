import { Theme } from '@/app/providers/themeProvider/lib/ThemeContext.ts';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/themeProvider';

export const ThemeContextDecorator =
  (theme: Theme): Decorator =>
  (Story) => (
    <ThemeProvider>
      <div className={`app ${theme}`} style={{ minHeight: 'auto' }}>
        <Story />
      </div>
    </ThemeProvider>
  );
