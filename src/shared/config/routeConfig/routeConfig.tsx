import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export enum Routes {
  HOME = 'home',
  NOT_FOUND = 'notFound',
}

export const RoutePaths: Record<Routes, string> = {
  [Routes.HOME]: '/',
  [Routes.NOT_FOUND]: '*',
};

export const routeConfig = [
  {
    path: RoutePaths.home,
    element: <HomePage />,
    id: 1,
  },
  {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
    id: 2,
  },
];
