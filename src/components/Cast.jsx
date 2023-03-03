import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieCast } from 'services/apiTheMovieDb';

// adult: false;
// cast_id: 4;
// character: 'Elio Perlman';
// credit_id: '5742ea41c3a3686c8c001a7a';
// gender: 2;
// id: 1190668;
// known_for_department: 'Acting';
// name: 'Timothée Chalamet';
// order: 0;
// original_name: 'Timothée Chalamet';
// popularity: 55.307;
// profile_path: '/7ejM0s3hMZSnfibIX7OWXeQmRo.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const imgUrl = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    getMovieCast(movieId).then(r => setCasts(r));
  }, [movieId]);

  return (
    <ul>
      {casts.map(({ id, profile_path, name }) => (
        <li key={id}>
          <img src={`${imgUrl}${profile_path}`} alt={name} width="50" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};
