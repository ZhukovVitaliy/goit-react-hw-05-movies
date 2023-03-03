import { Link, useLocation } from 'react-router-dom';
import { MovieTitle } from './MovieList.styled';

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: {
                from: location.pathname,
              },
            }}
            // to={`${film.id}`}
            // state={{ from: location }}
          >
            {/* <img src={} alt="" /> */}
            <MovieTitle>{film.name || film.title}</MovieTitle>
          </Link>
        </li>
      ))}
    </ul>
  );
};

//<Container>
// {films.map(film => (
//  <Link key={film.id} to={`${film.id}`} state={{ from: location }}>
//    {/* <img src={} alt="" /> */}
//      <MovieTitle>{film.name}</MovieTitle>
//    </Link>
// ))}
//</Container>;
