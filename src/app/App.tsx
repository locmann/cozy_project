import { AppRouter } from './providers/router';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import '@/shared/config/i18n/i18n.ts';
import { Suspense, useEffect } from 'react';
import ErrorBoundary from '@/app/providers/ErrorBoundary/ErrorBoundary.tsx';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

  return (
    <div className={`app`}>
      <ErrorBoundary>
        <Suspense fallback="">
          <NavBar />
          <div className={'main-screen'}>
            <SideBar />
            <AppRouter />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
