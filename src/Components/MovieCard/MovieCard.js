import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieCardWrapper } from '../MovieCardWrapper/MovieCardWrapper'
import { MovieCardImg } from '../MovieCardImg/MovieCardImg'
import { MovieReleaseDate } from '../MovieReleaseDate/MovieReleaseDate'
import { MovieDescriptionTitle } from '../MovieDescription/MovieDescription';
import { MovieDescriptionGenre } from '../MovieDescription/MovieDescription';
import { MovieCardIcon } from '../MovieCardIcon/MovieCardIcon';
import MovieCardEditDropdown from '../MovieCardEditDropdown/MovieCardEditDropdown';

export default function MovieCard(props) {
    const [isShownIcon, setIsShownIcon] = useState(false);
    const [isShowDropdown, setIsShownDropdown] = useState(false);
    const onClick = () => setIsShownDropdown(true);

    const showIcon = useCallback(() => {
        setIsShownIcon(true);
    }, []);

    const hideIcon = useCallback(() => {
        setIsShownIcon(false);
    }, []);

    return (
        <MovieCardWrapper onMouseEnter={showIcon}
                          onMouseLeave={hideIcon}>
            {isShownIcon && <MovieCardIcon onClick={onClick} data-testid="dropdown-icon"/>}
            {isShowDropdown && <MovieCardEditDropdown showDropdown={setIsShownDropdown} id={props.id}/>}
            <Link to={`/movie/${props.id}`}>
                <MovieCardImg>
                    <img src={props.srcImg} alt={props.title} width="300" height="455"/>
                </MovieCardImg>
            </Link>
            <MovieDescriptionTitle>
                <h4>{props.title}</h4>
                <MovieReleaseDate>{props.releaseDate}</MovieReleaseDate>
            </MovieDescriptionTitle>
            <MovieDescriptionGenre>{props?.genres?.join(', ')}</MovieDescriptionGenre>
        </MovieCardWrapper>
    )
};

MovieCard.protoTypes ={
    title: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired
}


