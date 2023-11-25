import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=f98a2ad8fae0781803be91729b2f3304';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?${API_KEY}`);
  return response.data;
};

export const searchMoviesByKeyword = async searchQuery => {
  const response = await axios.get(
    `/search/movie?${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?${API_KEY}&language=en-US`
  );
  return response.data;
};
