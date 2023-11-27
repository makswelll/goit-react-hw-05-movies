import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';

const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => {
      setMoviesReviews(results);
    });
  }, [movieId]);

  return (
    <>
      {moviesReviews.length > 0 ? (
        <ul>
          {moviesReviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
