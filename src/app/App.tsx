import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { RouterProvider } from 'app/providers/RouterProvider/ui/RouterProvider';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <RouterProvider />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
