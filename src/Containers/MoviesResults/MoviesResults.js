import React from 'react';

import MovieCard from '../../Components/MovieCard/MovieCard';
import { MoviesResultsWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import movies from '../../movies'

export default function MoviesResults() {
    return (
        <MoviesResultsWrapper>
            {movies.map(movie => (
                <MovieCard
                    alt={movie.title}
                    srcImg={movie.srcImg}
                    title={movie.title}
                    description={movie.description}
                    releaseDate={movie.release_date}
                    genres={movie.genres}
                    key={movie.id}
                    src='../../Assets/movie.jpg'
                />
            ))}
        </MoviesResultsWrapper>
    )
};


