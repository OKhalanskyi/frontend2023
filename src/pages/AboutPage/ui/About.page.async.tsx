import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./About.page')), 1500);
}));
