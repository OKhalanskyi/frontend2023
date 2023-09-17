import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/items';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType,
  collapsed: boolean,
}
export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    item,
    collapsed,
  } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});
