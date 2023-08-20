import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';

interface SidebarProps {
  className?: string;
}
export const Sidebar: React.FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang}/>
      </div>
    </div>
  );
};