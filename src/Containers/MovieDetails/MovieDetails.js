import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { SearchButton } from '../../Components/SearchButton/SearchButton';
import { MovieDetailsWrapper } from '../../Components/MovieDetailsWrapper/MovieDetailsWrapper';
import { MovieDetailsDescription } from '../../Components/MovieDetailsDescription/MovieDetailsDescription';
import { MovieCardImg } from '../../Components/MovieCardImg/MovieCardImg';
import { getMovieData } from '../../store/movies.reducer';

export default function MovieDetails(props) {
    const { id } = props.match.params;
    const dispatch = useDispatch();
    const state = useSelector(store => store.movie);

    useEffect(() => {
        dispatch(getMovieData(id));
    }, [id]);

    return (
        <Wrapper>
            <Link to={'/'}>
            <SearchButton><i className="fa fa-search fa-flip-horizontal"/></SearchButton>
            </Link>
            <MovieDetailsWrapper>
                <MovieCardImg>
                    <img src={state.poster_path} alt={state.title} width="300" height="455"/>
                </MovieCardImg>
                <MovieDetailsDescription>
                    <div>
                        <h1>{state.title}</h1>
                        <span>{state.vote_average}</span>
                    </div>
                    <span>{state.tagline}</span>
                    <div>
                        <div>{state.release_date}</div>
                        {state.runtime && <div>{state.runtime} min</div>}
                    </div>
                    <p>{state.overview}</p>
                </MovieDetailsDescription>
            </MovieDetailsWrapper>
        </Wrapper>
    )
};

MovieDetails.propTypes = {
    match: PropTypes.object.isRequired,
};

