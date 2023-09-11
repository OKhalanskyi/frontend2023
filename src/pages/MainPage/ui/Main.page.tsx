import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Button, ThemeButton } from 'shared/ui/Button';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      main
      <BugButton />
      {t('main')}
      <Button theme={ThemeButton.OUTLINE}>btn</Button>
    </div>
  );
};

export default MainPage;
