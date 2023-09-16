import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import {
  getProfileIsLoading,
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Typography } from 'shared/ui/Typography/ui/Typography';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}
export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Typography text={t('profile')} />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={styles.editBtn}
        >
          {t('edit')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.firstName}
          placeholder={t('your name')}
          className={styles.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('your surname')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
