import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

const RouterProvider = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>} >
      <Routes>
        {Object.values(routerConfig).map(({path, element}) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default RouterProvider;