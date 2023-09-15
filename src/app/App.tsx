import React, { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { RouterProvider } from 'app/providers/RouterProvider/ui/RouterProvider';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
