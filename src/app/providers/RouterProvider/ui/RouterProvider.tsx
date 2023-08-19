import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

export const RouterProvider = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>} >
      <Routes>
        {Object.values(routerConfig).map(({path, element}) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
