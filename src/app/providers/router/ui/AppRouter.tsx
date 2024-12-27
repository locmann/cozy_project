import { Route, Routes } from 'react-router';
import { FC, Suspense } from 'react';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig.tsx';
import { Loader } from '@/shared/ui';

export const AppRouter: FC = () => {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            <Suspense fallback={<Loader />}>
              <div className={'page-wrapper'}>{route.element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
