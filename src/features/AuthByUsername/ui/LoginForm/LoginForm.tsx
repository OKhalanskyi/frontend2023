import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { Typography, TypographyTheme } from 'shared/ui/Typography/ui/Typography';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Typography title={t('Authorization form')} />
      {error && (
        <Typography text={t('Incorrect username or password')} theme={TypographyTheme.ERROR} />
      )}
      <Input
        autoFocus
        type="text"
        className={styles.input}
        placeholder={t('username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={styles.input}
        type="text"
        placeholder={t('password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoginSubmit}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});
