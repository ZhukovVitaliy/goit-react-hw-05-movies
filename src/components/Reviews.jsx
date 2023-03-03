import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/apiTheMovieDb';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(r => setReviews(r));
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))
      )}
    </ul>
  );
};
