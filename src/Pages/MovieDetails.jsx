import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api';
import ButtonBack from 'components/ButtonBack/ButtonBack';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const buttonBack = location.state?.from ?? `/`;

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMoviesDetails);
  }, [movieId]);

  if (!moviesDetails) {
    return;
  }

  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;

  return (
    <>
      <ButtonBack to={buttonBack} />
      <div>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : defaultImg
            }
            alt={title}
          />
        </div>
        <div>
          {title && (
            <h2>
              {title} {release_date.substr(0, 4)}
            </h2>
          )}

          <p>User Score: {Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {<p>{genres.map(({ name }) => name).join(', ')}</p>}
        </div>
      </div>

      <ul>
        <h3>Additional information</h3>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MoviesDetails;
