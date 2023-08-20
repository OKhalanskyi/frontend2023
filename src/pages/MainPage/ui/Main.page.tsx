import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      main
      {t('main')}
    </div>
  );
};

export default MainPage;