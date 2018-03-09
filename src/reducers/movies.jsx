import { GET_MOVIES, SET_MOVIES } from './../constants';
import { setMovies } from './../actions';
import { store } from './../index';

/**
 * Get Movies from the API Then fire the setMovies action to update the state with them
 *
 * @param {object} action
 */
const getMovies = (action) => {
  fetch(action.payload.url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then((json) => {
      // Movies are stored in: json._embedded[‘viaplay:block’][0]._embedded[‘viaplay:products’]
      // So here I just making sure there is no undefined key
      const movies = (((((json || {})._embedded || {})['viaplay:blocks'] || [])[0] || {})._embedded || {})['viaplay:products']; // eslint-disable-line no-underscore-dangle
      store.dispatch(setMovies(movies));
    });
};

/**
 * movies reduces
 *
 * @param {object} state
 * @param {object} action
 * @returns
 */
const movies = (state = { isLoading: false }, action) => {
  switch (action.type) {
    // start fetching movies process and updates the app state with 'isLoading: true'
    // isLoading: true => may be used to show a spinner while loading the movies from the api
    case GET_MOVIES:
      getMovies(action);
      return Object.assign({}, state, { isLoading: true });

    // update the app state with the movies list and isLoading: false
    case SET_MOVIES:
      return Object.assign({}, state, {
        isLoading: false,
        movies: action.payload.movies,
      });

    default:
      return state;
  }
};

export default movies;
