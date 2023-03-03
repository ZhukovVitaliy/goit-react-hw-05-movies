import axios from 'axios';

// https://api.themoviedb.org/3/trending/movie/week?api_key=ba6efd655061d58b206e4bc7022c9125

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

const fetchMovies = async query => {
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
    new Error('Not found');
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

const test = {
  adult: false,
  backdrop_path: '/edOt2jNyCbb8SQSvulD2sRRJhmA.jpg',
  belongs_to_collection: null,
  budget: 0,
  genres: [
    { id: 28, name: 'Action' },
    { id: 80, name: 'Crime' },
    { id: 53, name: 'Thriller' },
  ],
  homepage: 'https://www.netflix.com/title/81458368',
  id: 873126,
  imdb_id: 'tt15229674',
  original_language: 'it',
  original_title: 'Il mio nome è vendetta',
  overview:
    'After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.',
  popularity: 278.108,
  poster_path: '/7l3war94J4tRyWUiLAGokr3ViF2.jpg',
  production_companies: [
    {
      id: 2534,
      logo_path: '/6aizJC0RRO5oprJMYf2PBAB7lyZ.png',
      name: 'Colorado Film',
      origin_country: 'IT',
    },
  ],
  production_countries: [{ iso_3166_1: 'IT', name: 'Italy' }],
  release_date: '2022-11-30',
  revenue: 0,
  runtime: 90,
  spoken_languages: [
    { english_name: 'Italian', iso_639_1: 'it', name: 'Italiano' },
  ],
  status: 'Released',
  tagline: '',
  title: 'My Name Is Vendetta',
  video: false,
  vote_average: 6.901,
  vote_count: 403,
};

// ///////////////////////////////////////////////////

export const getFetch = (query = '', page = 1) => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
  const API_KEY = 'ba6efd655061d58b206e4bc7022c9125';

  const url = `${BASE_URL}${API_KEY}`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`movie not found`));
  });
};
// console.log(getFetch().then(({ results }) => [...results]));

// export const getFetch = (query = '', page = 1) => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = 'ba6efd655061d58b206e4bc7022c9125';

//   const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//   return fetch(url).then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(new Error(`photo not found`));
//   });
// };
// console.log(123);
