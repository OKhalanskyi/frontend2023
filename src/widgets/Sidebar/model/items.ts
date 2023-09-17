import React from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import HomeIcon from 'shared/assets/icons/home20-20.svg';
import AboutIcon from 'shared/assets/icons/about20-20.svg';
import ProfileIcon from 'shared/assets/icons/user20-20.svg';

export type SidebarItemType = {
  path: string,
  text: string,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    text: 'About',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
