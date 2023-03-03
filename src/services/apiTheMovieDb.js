import axios from 'axios';

const KEY = 'ba6efd655061d58b206e4bc7022c9125';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US',
};

export const fetchTrending = async () => {
  try {
    const config = {
      url: 'trending/movie/week',
    };

    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error('fetchTrending not found');
  }
};

export const fetchSearchMovie = async query => {
  if (!query) {
    return;
  }

  try {
    const config = {
      url: 'search/movie',
      params: {
        query,
      },
    };

    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error('fetchSearchMovie not found');
  }
};

export const getMovieDetails = async id => {
  if (!id) {
    return;
  }

  try {
    const config = {
      url: `/movie/${id}`,
    };

    const { data } = await axios(config);
    return data;
  } catch (error) {
    new Error('fetchSearchMovie not found');
  }
};

export const getMovieCast = async id => {
  if (!id) {
    return;
  }

  try {
    const config = {
      url: `/movie/${id}/credits`,
    };

    const { data } = await axios(config);
    return data.cast;
  } catch (error) {
    new Error('fetchSearchMovie not found');
  }
};

export const getMovieReviews = async id => {
  if (!id) {
    return;
  }

  try {
    const config = {
      url: `/movie/${id}/reviews`,
    };

    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error('fetchSearchMovie not found');
  }
};
