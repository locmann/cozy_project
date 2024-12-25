import { RoutePaths } from '@/shared/config';

import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { FC } from 'react';
import { AppLink } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface INavBar {
  className?: string;
}

export const NavBar: FC<INavBar> = ({ className }) => {
  const { t } = useTranslation('home');
  return (
    <nav className={clsx(styles.navBar, className)}>
      <AppLink className={clsx(styles.link)} to={RoutePaths.home}>
        {t('Главная страница')}
      </AppLink>
    </nav>
  );
};
