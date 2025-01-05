import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink.tsx';
import { FC } from 'react';
import { ISideBarItems } from '../../model/items';
import { useTranslation } from 'react-i18next';

export const SideBarItem: FC<ISideBarItems & { collapsed: boolean }> = ({
  text,
  path,
  Icon,
  collapsed,
}) => {
  const { t } = useTranslation();

  return (
    <AppLink
      className={clsx(styles.link, {
        [styles.collapsed]: collapsed,
      })}
      to={path}
      theme={AppLinkTheme.SECONDARY}
    >
      <Icon className={styles.icon} />
      <span className={clsx(styles.linkText)}>{t(text)}</span>
    </AppLink>
  );
};
