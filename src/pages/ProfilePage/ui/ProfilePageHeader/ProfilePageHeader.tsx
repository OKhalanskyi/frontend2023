import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, useCallback } from 'react';
import { Typography } from 'shared/ui/Typography/ui/Typography';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Typography text={t('profile')} />
      {
        readonly ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            className={styles.editBtn}
            onClick={onEdit}
          >
            {t('edit')}
          </Button>
        ) : (
          <>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              className={styles.editBtn}
              onClick={onCancelEdit}
            >
              {t('cancel')}
            </Button>

            <Button
              theme={ButtonTheme.OUTLINE}
              className={styles.saveBtn}
              onClick={onSave}
            >
              {t('save')}
            </Button>
          </>
        )
      }
    </div>
  );
};
