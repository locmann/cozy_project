import { ButtonHTMLAttributes, FC } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    size = ButtonSize.MEDIUM,
    square = false,
    disabled = false,
    ...otherProps
  } = props;

  return (
    <button
      className={clsx(className, styles.btn, styles[theme], styles[size], {
        [styles.square]: square,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
