import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme_switcher_dark.svg';
import LightIcon from 'shared/assets/icons/theme_switcher_light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {
        theme === Theme.DARK
          ? <DarkIcon />
          : <LightIcon />
      }
    </Button>
  );
});
