import { Button } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

import styles from './stlyles.module.scss';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={handleLanguageChange} className={styles.btn}>
      {t('Перевести')}
    </Button>
  );
};
