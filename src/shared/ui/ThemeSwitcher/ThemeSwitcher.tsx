import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui';
import { useTheme } from '@/app/providers/themeProvider';
import { Theme } from '@/app/providers/themeProvider/lib/ThemeContext.ts';

import DarkTheme from '@/shared/assets/theme-dark.svg?react';
import LightTheme from '@/shared/assets/theme-light.svg?react';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={clsx(styles.themeSwitcher)} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
