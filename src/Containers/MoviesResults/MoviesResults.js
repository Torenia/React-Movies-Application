import React, {useContext, memo } from 'react';
import PropTypes from 'prop-types';

import { MoviesResultsWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import MovieCard from '../../Components/MovieCard/MovieCard';
import  EmptyResultState from '../../Components/EmptyResultState/EmptyResultState';
import { useMoviesData } from '../../Hooks/useMoviesData';
import { Context } from '../../Components/Context/Context';

function MoviesResults({ searchText }) {
    const sortBy = useContext(Context).sortBy;
    const filterBy = useContext(Context).filterBy;
    const [state] = useMoviesData(sortBy, filterBy, searchText);

    return (
        <MoviesResultsWrapper>
            {state.totalAmount > 0
                ? state.data.map(movie => (
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
                : <EmptyResultState/>}
        </MoviesResultsWrapper>
    )
};

MoviesResults.protoTypes = {
    searchText: PropTypes.string
}

export default memo(MoviesResults);
