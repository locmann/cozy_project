import { Button } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

import styles from './stlyles.module.scss';
import { ButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { FC } from 'react';

interface ILangSwitcher {
  short?: boolean;
}

export const LangSwitcher: FC<ILangSwitcher> = ({ short }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={handleLanguageChange}
      className={styles.btn}
      theme={ButtonTheme.CLEAR_INVERTED}
    >
      {t(short ? 'Перевести сжатый' : 'Перевести')}
    </Button>
  );
};
