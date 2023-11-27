import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/api';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(({ cast }) => {
      setMoviesCast(cast);
    });
  }, [movieId]);

  return (
    <div>
      {moviesCast.length > 0 ? (
        <ul>
          {moviesCast.map(({ id, profile_path, character, name }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImg
                }
                width={250}
                alt={name}
              />

              <p>{name}</p>

              <p>Character: {character.substr(0, 9)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there isn't any info</p>
      )}
    </div>
  );
};

export default Cast;
