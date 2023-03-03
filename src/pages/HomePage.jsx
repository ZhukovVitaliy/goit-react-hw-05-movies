import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrending } from 'services/apiTheMovieDb';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(r => setFilms(r));
  }, []);

  // console.log('HomePage  films:', films);

  return (
    <main>
      <h2>Trandind today</h2>

      <MovieList films={films} />
    </main>
  );
};

export default HomePage;
