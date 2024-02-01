import {movieApiUrl, apiToken} from '../constants/url';

export const moodUrl = type => {
  return type === 'Movies'
    ? `${movieApiUrl}/genre/movie/list?api_key=${apiToken}`
    : `${movieApiUrl}/genre/tv/list?language=en&api_key=${apiToken}`;
};

const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const moviesUrl = (type, name) => {
  const pageNumber = randomNumberInRange(1, 500);
  return type === 'Movies'
    ? `${movieApiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc&with_genres=${name}&api_key=${apiToken}`
    : `${movieApiUrl}/discover/tv?include_adult=true&include_null_first_air_dates=true&language=en-US&page=${pageNumber}
    &sort_by=popularity.desc&with_genres=${name}&api_key=${apiToken}`;
};

export const detailApiUrl = (type, movieId) => {
  return type == 'Movies'
    ? `${movieApiUrl}/movie/${movieId}?api_key=${apiToken}`
    : `${movieApiUrl}/tv/${movieId}?language=en-US&api_key=${apiToken}`;
};
