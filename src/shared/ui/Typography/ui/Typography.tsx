import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Typography.module.scss';

export enum TypographyTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TypographyTheme
}
export const Typography = memo((props: TypographyProps) => {
  const {
    className,
    title,
    text,
    theme = TypographyTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(styles.Typography, { [styles[theme]]: true }, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
