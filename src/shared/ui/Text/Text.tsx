import { FC, memo } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<ITextProps> = memo((props) => {
  const { className, title, text, theme = TextTheme.PRIMARY } = props;

  return (
    <div className={clsx(styles.text, { [styles[theme]]: true }, className)}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
