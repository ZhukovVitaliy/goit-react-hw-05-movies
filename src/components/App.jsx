import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MoviesApp } from './MoviesApp/MoviesApp';
import HomePage from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

// // const MyCompon = lazy(() => import('./MyComponent'));
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

// https://api.themoviedb.org/3/trending/all/day?api_key=ba6efd655061d58b206e4bc7022c9125
// export const getFetch = (query = '', page = 1) => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = 'ba6efd655061d58b206e4bc7022c9125';

//   // const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   const url = `https://api.themoviedb.org/3/trending/all/day?api_key=ba6efd655061d58b206e4bc7022c9125
// `;

//   return fetch(url).then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(new Error(`photo not found`));
//   });
// };
// console.log(getFetch().then(({ results }) => [...results]));
