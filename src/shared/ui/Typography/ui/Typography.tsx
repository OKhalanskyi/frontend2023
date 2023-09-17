import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Typography.module.scss';

export enum TypographyTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TypographyTheme;
  align?: TextAlign;
}
export const Typography = memo((props: TypographyProps) => {
  const {
    className,
    title,
    text,
    align = TextAlign.LEFT,
    theme = TypographyTheme.PRIMARY,
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
  };

  return (
    <div className={classNames(styles.Typography, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
