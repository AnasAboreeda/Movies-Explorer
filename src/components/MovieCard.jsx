import React from 'react';
import PropTypes from 'prop-types';
import './../styles/MovieCard.css';

/**
 * MovieCard renders a single movie. It shows movie's cover image, title and IMDB rating
 *
 * @param {object} { movie }
 * @returns
 */
const MovieCard = ({ movie }) => {
  const { title } = (((movie || {}).content || {}).series || {});
  const { rating } = (((movie || {}).content || {}).imdb || {});
  const { url } = ((((movie || {}).content || {}).images || {}).landscape || {});
  return (
    <div className="movie-card">
      <img className="movie-cover" src={url} alt={title} />
      <div className="movie-title-container">
        <div className="movie-title">{title}</div>

        {rating ?
          <div className="badge">IMDB {` ${rating}`}</div> :
        null
        }
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default MovieCard;
