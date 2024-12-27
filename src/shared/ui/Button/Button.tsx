import { ButtonHTMLAttributes, FC } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    ...otherProps
  } = props;

  return (
    <button
      className={clsx(className, styles[theme], styles.btn)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
