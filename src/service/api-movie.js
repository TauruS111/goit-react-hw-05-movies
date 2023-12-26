import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ec26e7bf1571b61488f871a254e2a23e';

export const fetchAllTrend = async () => {
  return (await axios.get(`trending/movie/day?api_key=${API_KEY}`)).data;
};

export const searchQuery = async query => {
  return (
    await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    )
  ).data;
};

export const movieDetails = async id => {
  return (await axios.get(`movie/${id}?api_key=${API_KEY}`)).data;
};

export const movieCredits = async id => {
  return (await axios.get(`movie/${id}/credits?api_key=${API_KEY}`)).data;
};

export const movieReviews = async id => {
  return (await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`)).data;
};
