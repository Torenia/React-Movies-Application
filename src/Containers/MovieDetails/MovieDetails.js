import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { SearchButton } from '../../Components/SearchButton/SearchButton';
import { MovieDetailsWrapper } from '../../Components/MovieDetailsWrapper/MovieDetailsWrapper';
import { MovieDetailsDescription } from '../../Components/MovieDetailsDescription/MovieDetailsDescription';
import { MovieCardImg } from '../../Components/MovieCardImg/MovieCardImg';
import { getMovieDetails } from './MovieDetailsUtils';

export default function MovieDetails(props) {
    const { id } = props.match.params;
    const movieData = getMovieDetails(id);

    return (
        <Wrapper>
            <Link to={'/'}>
            <SearchButton><i className="fa fa-search fa-flip-horizontal"/></SearchButton>
            </Link>
            <MovieDetailsWrapper>
                <MovieCardImg>
                    <img src={movieData.poster_path} alt={movieData.title} width="300" height="455"/>
                </MovieCardImg>
                <MovieDetailsDescription>
                    <div>
                        <h1>{movieData.title}</h1>
                        <span>{movieData.vote_average}</span>
                    </div>
                    <span>{movieData.tagline}</span>
                    <div>
                        <div>{movieData.release_date}</div>
                        {movieData.runtime && <div>{movieData.runtime} min</div>}
                    </div>
                    <p>{movieData.overview}</p>
                </MovieDetailsDescription>
            </MovieDetailsWrapper>
        </Wrapper>
    )
};

MovieDetails.propTypes = {
    match: PropTypes.object.isRequired,
};

