import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextAlign, Typography, TypographyTheme } from 'shared/ui/Typography/ui/Typography';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  readonly?: boolean
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
        <Typography
          theme={TypographyTheme.ERROR}
          title={t('Error happened while loading')}
          text={t('Reload page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.firstName}
          placeholder={t('your name')}
          className={styles.input}
          readonly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastName}
          placeholder={t('your surname')}
          className={styles.input}
          readonly={readonly}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.age}
          placeholder={t('your age')}
          className={styles.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('your city')}
          className={styles.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('your username')}
          className={styles.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('your avatar')}
          className={styles.input}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={styles.input}
          onChange={onChangeCurrency}
          value={data?.currency}
          readonly={readonly}
        />
        <CountrySelect
          className={styles.input}
          onChange={onChangeCountry}
          value={data?.country}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
