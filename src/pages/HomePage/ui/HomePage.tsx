import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation('home');

  return <div>{t('Главная страница')}</div>;
};
