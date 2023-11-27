import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from '../api/api';

import MoviesList from 'components/MoviesList/MoviesList';

import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
      {loader && <Loader />}
    </>
  );
};

export default Home;
