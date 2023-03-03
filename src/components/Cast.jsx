import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/apiTheMovieDb';

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
