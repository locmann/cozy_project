import styles from './styles.module.scss';
import { AppLink, Button, LangSwitcher, ThemeSwitcher } from '@/shared/ui';
import { useState } from 'react';
import { clsx } from 'clsx';
import { ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { RoutePaths } from '@/shared/config';
import { useTranslation } from 'react-i18next';

import HomeIcon from '@/shared/assets/home.svg?react';
import AboutIcon from '@/shared/assets/about.svg?react';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink.tsx';

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const handleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <aside
      className={clsx(styles.SideBar, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.links}>
        <AppLink
          className={clsx(styles.link)}
          to={RoutePaths.home}
          theme={AppLinkTheme.SECONDARY}
        >
          <HomeIcon className={styles.icon} />
          <span className={styles.linkText}>{t('Главная страница')}</span>
        </AppLink>
        <AppLink
          className={clsx(styles.link)}
          to={RoutePaths.about}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.linkText}>{t('О нас')}</span>
        </AppLink>
      </div>

      <Button
        className={styles.collapseButton}
        onClick={handleCollapse}
        theme={ButtonTheme.CLEAR_INVERTED}
        square={true}
        size={ButtonSize.XLARGE}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div
        className={clsx(styles.switchers, { [styles.collapsedSwt]: collapsed })}
      >
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
};
