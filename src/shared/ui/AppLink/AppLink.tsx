import { Link, LinkProps } from 'react-router';
import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface IAppLink extends LinkProps, PropsWithChildren {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLink> = (props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      className={clsx(styles.appLink, className, styles[theme])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
