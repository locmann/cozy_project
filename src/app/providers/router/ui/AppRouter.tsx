import { Route, Routes } from 'react-router';
import { FC, Suspense } from 'react';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig.tsx';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routeConfig.map((route) => (
          <Route
            element={<div className={'page-wrapper'}>{route.element}</div>}
            key={route.id}
            path={route.path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
