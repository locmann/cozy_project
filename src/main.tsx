import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';
import App from '@/app/App.tsx';
import { ThemeProvider } from '@/app/providers/themeProvider';
import { BrowserRouter } from 'react-router';
import { StoreProvider } from '@/app/providers/StoreProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
