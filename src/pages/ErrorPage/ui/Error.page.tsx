import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import styles from './Error.page.module.scss';

interface ErrorPageProps {
  className?: string;
}
export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.ErrorPage, {}, [className])}>
      <p>{t('unhandled error')}</p>
      <Button
        onClick={reloadPage}
      >
        {t('reload page')}
      </Button>
    </div>
  );
};
