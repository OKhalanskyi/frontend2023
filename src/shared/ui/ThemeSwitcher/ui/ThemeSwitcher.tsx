import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme_switcher_dark.svg';
import LightIcon from 'shared/assets/icons/theme_switcher_light.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({className}) => {
  const { theme, toggleTheme} = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
    >
      {
        theme === Theme.DARK
          ? <DarkIcon />
          : <LightIcon />
      }
    </Button>
  );
};