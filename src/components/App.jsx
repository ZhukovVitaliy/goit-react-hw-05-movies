// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MoviesApp } from './MoviesApp/MoviesApp';

import HomePage from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
// const HomePage = lazy(() =>
//   import('pages/HomePage' /* webpackChunkName: "Homepage" */)
// );
// const MoviesPage = lazy(() =>
//   import('pages/MoviesPage' /* webpackChunkName: "MoviesPage" */)
// );
// const MovieDetailsPage = lazy(() =>
//   import('pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
// );
// const Cast = lazy(() => import('./Cast' /* webpackChunkName: "Cast" */));
// const Reviews = lazy(() =>
//   import('./Reviews' /* webpackChunkName: "Reviews" */)
// );

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesApp />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
