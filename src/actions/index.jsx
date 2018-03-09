import { GET_MOVIES, SET_MOVIES } from './../constants';

/**
 * GET_MOVIES action
 *
 * @param {string} url
 */
export const getMovies = url => ({
  type: GET_MOVIES,
  payload: {
    url,
  },
});

/**
 * setMovies action
 *
 * @param {array} movies
 */
export const setMovies = movies => ({
  type: SET_MOVIES,
  payload: {
    movies,
  },
});
