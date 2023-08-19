import React, { Suspense } from 'react';
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>theme</button>
      <Suspense fallback={<h1>Loading</h1>} >
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
