import { AppRouter } from './providers/router';

import './styles/index.scss';
import { useTheme } from '@/app/providers/themeProvider';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import '@/shared/config/i18n/i18n.ts';
import { Suspense } from 'react';
import ErrorBoundary from '@/app/providers/ErrorBoundary/ErrorBoundary.tsx';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
