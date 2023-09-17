import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'shared/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const RouterProvider = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routerConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
});
