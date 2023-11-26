import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/api';

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
        moviesCast.map(({ id, profile_path, character, name }) => (
          <div key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <p>No Image Available</p>
            )}

            <p>{name}</p>

            <p>Character: {character.substr(0, 9)}</p>
          </div>
        ))
      ) : (
        <p>Sorry, there isn't any info</p>
      )}
    </div>
  );
};

export default Cast;
