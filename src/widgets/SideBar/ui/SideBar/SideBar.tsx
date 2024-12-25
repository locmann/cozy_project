import styles from './styles.module.scss';
import { Button, LangSwitcher, ThemeSwitcher } from '@/shared/ui';
import { useState } from 'react';
import { clsx } from 'clsx';

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <aside
      className={clsx(styles.SideBar, {
        [styles.collapsed]: collapsed,
      })}
    >
      sidebar
      <Button onClick={handleCollapse}>Collapse</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
