import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieReviews } from 'services/apiTheMovieDb';

// {
//     "author": "Nathan",
//     "author_details": {
//         "name": "Nathan",
//         "username": "TitanGusang",
//         "avatar_path": "/yHGV91jVzmqpFOtRSHF0avBZmPm.jpg",
//         "rating": 5
//     },
//     "content": "I was really excited for this film; the trailers made the stakes seem high with a story that was somewhat mature in tone. Unfortunately, I was ultimately let down.\r\n\r\nThe overarching plot was pretty good. I liked the arcs our characters had, particularly Scott and Cassie Lang. But the minor details are where things get messy. We get introduced to so many new characters, concepts, and story details in the quantum realm, resulting in an overall film that is not very digestible. There is too much going on and not enough time to fully flesh out the details.\r\n\r\nThe dialogue is pretty poorly written. At some points in the film, I was literally laughing out loud at what the characters were saying. It felt exactly like a TikTok skit exaggerating and mocking superhero movies. Cassie Lang has one line that is probably THE MOST CRINGY LINE EVER SPOKEN IN THE MCU.\r\n\r\nThe performances were decent overall. Most of the acting in the Ant-Man films is a little cheesy and campy, which mostly works in the small-scale stories they tell. But with the large, expanding story that the film is attempting to deliver, it just felt cheap. Kang is really amazing. Jonathan Majors was a tier above the rest of the cast; I can't wait to see more of him but also feel like he was wasted here.\r\n\r\nFinally, the visuals were really inconsistent. Some scenes looked quite good, with interesting and detailed settings, while others clearly featured three characters standing in front of a green screen. I mean, in some scenes I swear I could see slight black outlines from the keying technology. Where is the budget going in these films? They really need to slow down in postproduction because this is becoming a major theme. One thing I will note is that I thought MODOK looked really good. It was always going to be difficult to pull off a live action version of him, but they did a stellar job.\r\n\r\nOverall, I am pretty disappointed in the movie, but the movie gave me enough to make this a somewhat average experience. The MCU needs to pick it up this year because it is on a major downward trajectory.\r\n\r\nScore: 52% |\r\nVerdict: Average",
//     "created_at": "2023-02-17T14:05:37.916Z",
//     "id": "63ef89b135818f0081d2f4d9",
//     "updated_at": "2023-02-17T14:05:37.997Z",
//     "url": "https://www.themoviedb.org/review/63ef89b135818f0081d2f4d9"
// }

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
