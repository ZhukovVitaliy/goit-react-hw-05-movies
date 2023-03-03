import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo } from './MoviesApp.styled';

export const MoviesApp = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Logo>
          MovieSearch
          <span role="img" aria-label="movie icon">
            🎬
          </span>
        </Logo>
      </Header>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
