import styles from './styles.module.scss';
import { Button, LangSwitcher, ThemeSwitcher } from '@/shared/ui';
import { useState } from 'react';
import { clsx } from 'clsx';
import { ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { SideBarItemsList } from '../../model/items.ts';
import { SideBarItem } from '@/widgets/SideBar/ui/SideBarItem/SideBarItem.tsx';

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
      <div className={styles.links}>
        {SideBarItemsList.map((item) => (
          <SideBarItem
            key={item.path}
            path={item.path}
            Icon={item.Icon}
            text={item.text}
            collapsed={collapsed}
          />
        ))}
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
