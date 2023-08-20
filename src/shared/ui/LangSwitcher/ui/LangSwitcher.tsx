import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LangSwitcher.module.scss';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
  }

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t('language')}
    </Button>
  );
};