import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchSearchMovie } from 'services/apiTheMovieDb';

export const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('name') ?? '';

  useEffect(() => {
    fetchSearchMovie(searchParams).then(setFilms);
  }, [searchParams]);

  const visidleFils = films.filter(film => {
    const title = film.name || film.title;

    return title.toLowerCase().includes(movieTitle.toLowerCase());
  });

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchMovies value={movieTitle} onChange={updateQueryString} />
      <MovieList films={visidleFils} />
    </main>
  );
};
