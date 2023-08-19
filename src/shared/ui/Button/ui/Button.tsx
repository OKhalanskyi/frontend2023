import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import React, { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton,
}
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      { children }
    </button>
  );
};