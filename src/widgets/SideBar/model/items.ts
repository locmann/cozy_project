import { RoutePaths } from '@/shared/config';
import { FC, SVGProps } from 'react';

import HomeIcon from '@/shared/assets/home.svg?react';
import AboutIcon from '@/shared/assets/about.svg?react';

export interface ISideBarItems {
  path: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
}

export const SideBarItemsList: ISideBarItems[] = [
  {
    path: RoutePaths.home,
    Icon: HomeIcon,
    text: 'Главная страница',
  },
  {
    path: RoutePaths.about,
    Icon: AboutIcon,
    text: 'О нас',
  },
];
