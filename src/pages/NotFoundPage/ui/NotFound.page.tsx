import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.page.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t('page is not found')}
    </div>
  );
};
