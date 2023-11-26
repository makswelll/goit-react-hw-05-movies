import { Link, Outlet, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <div>{title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesList;
