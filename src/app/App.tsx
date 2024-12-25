import { AppRouter } from './providers/router';

import './styles/index.scss';
import { useTheme } from '@/app/providers/themeProvider';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import '@/shared/config/i18n/i18n.ts';
import { Suspense } from 'react';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <NavBar />
        <div className={'main-screen'}>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
