import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';

export enum Routes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound',
}

export const RoutePaths: Record<Routes, string> = {
  [Routes.HOME]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.NOT_FOUND]: '*',
};

export const routeConfig = [
  {
    path: RoutePaths.home,
    element: <HomePage />,
    id: 1,
  },
  {
    path: RoutePaths.about,
    element: <AboutPage />,
    id: 2,
  },
  {
    path: RoutePaths.profile,
    element: <ProfilePage />,
    id: 3,
  },
  {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
    id: 4,
  },
];
