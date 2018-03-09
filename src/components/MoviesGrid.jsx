import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { getMovies } from './../actions';
import MovieCard from './MovieCard';
import { store } from './../index';

import './../styles/MoviesGrid.css';

/**
 * MoviesGrid shows a list of movies in a grid
 *
 * @class MoviesGrid
 * @extends {Component}
 */
class MoviesGrid extends Component {
  /**
   * Fires the getMovies action before component mount to fetch the movies list from the API
   *
   * @memberof MoviesGrid
   */
  componentWillMount() {
    const API_URL = 'https://content.viaplay.se/pc-se/serier/samtliga';
    store.dispatch(getMovies(API_URL));
  }

  /**
   * Renders the view of the movies grid
   *
   * @returns html
   * @memberof MoviesGrid
   */
  render() {
    return (
      <div className="movies-grid">
        <div className="movies-grid-title">Fixa fredagsstämningen, tågresan och soffmyset.</div>
        { this.props.movies.map(movie => <MovieCard key={uuid()} movie={movie} />)}
      </div>
    );
  }
}

MoviesGrid.defaultProps = {
  movies: [],
};

MoviesGrid.propTypes = {
  movies: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

function mapStateToProps(state) {
  return {
    movies: state.movies.movies,
  };
}

export default connect(mapStateToProps, null)(MoviesGrid);
