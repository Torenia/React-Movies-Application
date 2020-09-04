import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MoviesResultsWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import MovieCard from '../../Components/MovieCard/MovieCard';
import  EmptyResultState from '../../Components/EmptyResultState/EmptyResultState';
import { useAsyncHook } from '../../Hooks/useAsyncHook';
import { Context } from '../../Components/Context/Context';

export default function MoviesResults({ searchText, resultCount }) {
    const sortBy = useContext(Context).sortBy;
    const filterBy = useContext(Context).filterBy;
    const [moviesData] = useAsyncHook(sortBy, filterBy, searchText, resultCount);

    return (
        <MoviesResultsWrapper>
            {moviesData.totalAmount > 0
                ? moviesData.data.map(movie => (
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

MoviesResults.protoTypes ={
    searchText: PropTypes.string,
    resultCount: PropTypes.number
}


