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
        moviesReviews.map(({ id, author, content }) => {
          return (
            <ul key={id}>
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </ul>
          );
        })
      ) : (
        <p>Sorry, we don`t have any review for this movie</p>
      )}
    </>
  );
};
export default Reviews;
