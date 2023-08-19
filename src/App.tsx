import React, { Suspense } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/Main.page.async';
import { AboutPageAsync } from './pages/AboutPage/About.page.async';
import { useTheme } from './theme/useTheme';
import { classNames as cn } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Link to="/about" >about</Link>
      <Link to="/" >main</Link>
      <button onClick={toggleTheme}>theme</button>
      <Suspense fallback={<h1>Loading</h1>} >
        <Routes>
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;