import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div className={styles.notFound}>{t('Страница не найдена')}</div>;
};
