import { HomePage } from '@/pages/HomePage';

export enum Routes {
  HOME = 'home',
}

export const RoutePaths: Record<Routes, string> = {
  [Routes.HOME]: '/',
};

export const routeConfig = [
  {
    path: RoutePaths.home,
    element: <HomePage />,
    id: 1,
  },
];
