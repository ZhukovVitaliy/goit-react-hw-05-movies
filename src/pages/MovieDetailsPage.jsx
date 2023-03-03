import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { BackLink } from 'components/BackLink';
import { getMovieDetails } from 'services/apiTheMovieDb';

export const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinckHref = location.state?.from ?? '/movies';
  const imgUrl = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    getMovieDetails(movieId).then(setFilm);
  }, [movieId]);

  const { poster_path, title, vote_average, overview } = film;

  return (
    <main>
      <BackLink to={backLinckHref}>Back to list</BackLink>

      <img src={`${imgUrl}${poster_path}`} alt="" />
      <h2>{title}</h2>
      <p>User score: {vote_average * 10} %</p>
      <h3>Overview</h3>
      <p>{overview}</p>

      <hr />

      <b>Additional information</b>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <hr />

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
