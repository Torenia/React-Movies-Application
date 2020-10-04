import React, { memo } from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../../Components/MovieCard/MovieCard';

const MoviesCards = ({ state }) => (
    state.data.map(movie => (
        <MovieCard
            alt={movie.title}
            srcImg={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            genres={movie.genres}
            key={movie.id}
            src='../../Assets/movie.jpg'
            id={movie.id}
        />
    ))
)

MoviesCards.protoTypes = {
    state: PropTypes.object
}

export default memo(MoviesCards);
