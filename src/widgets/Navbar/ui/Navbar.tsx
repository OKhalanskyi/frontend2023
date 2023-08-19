import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={styles.mainLink}
        >
          main
        </AppLink>

        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
        >
          about
        </AppLink>
      </div>
    </div>
  );
};
