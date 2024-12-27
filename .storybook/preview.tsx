import type { Preview } from '@storybook/react';
import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
} from '../src/shared/config';
import { Theme } from '@/app/providers/themeProvider/lib/ThemeContext.ts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
