import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MovieCardWrapper } from '../MovieCardWrapper/MovieCardWrapper'
import { MovieCardImg } from '../MovieCardImg/MovieCardImg'
import { MovieReleaseDate } from '../MovieReleaseDate/MovieReleaseDate'
import {MovieDescriptionTitle} from '../MovieDescription/MovieDescription';
import {MovieDescriptionGenre} from '../MovieDescription/MovieDescription';
import {MovieCardIcon} from '../MovieCardIcon/MovieCardIcon';
import MovieCardEditDropdown from '../MovieCardEditDropdown/MovieCardEditDropdown';

export default function MovieCard(props) {
    const [isShownIcon, setIsShownIcon] = useState(false);
    const [isShowDropdown, setIsShownDropdown] = useState(false);
    const [isShownMovieCard, setIsShownMovieCard] = useState(true);
    const onClick = () => setIsShownDropdown(true);

    return (
        isShownMovieCard &&
        <MovieCardWrapper onMouseEnter={() => setIsShownIcon(true)}
                          onMouseLeave={() => setIsShownIcon(false)}>
            {isShownIcon && (<MovieCardIcon onClick={onClick} />)}
            {isShowDropdown &&
            <MovieCardEditDropdown
                showDropdown={setIsShownDropdown}
                showMovieCard={setIsShownMovieCard}/>
            }
            <MovieCardImg>
                <img src={props.srcImg} alt={props.title} width="300" height="455"/>
            </MovieCardImg>
            <MovieDescriptionTitle>
                <h4>{props.title}</h4>
                <MovieReleaseDate>{props.releaseDate}</MovieReleaseDate>
            </MovieDescriptionTitle>
            <MovieDescriptionGenre>{props.genres.join(', ')}</MovieDescriptionGenre>
        </MovieCardWrapper>
    )
};

MovieCard.protoTypes ={
    title: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
}


