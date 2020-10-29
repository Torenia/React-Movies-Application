import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';

import { MovieCardWrapper } from '../Components/MovieCardWrapper/MovieCardWrapper'
import { MovieCardImg } from '../Components/MovieCardImg/MovieCardImg'
import { MovieReleaseDate } from '../Components/MovieReleaseDate/MovieReleaseDate'
import { MovieDescriptionTitle } from '../Components/MovieDescription/MovieDescription';
import { MovieDescriptionGenre } from '../Components/MovieDescription/MovieDescription';
import { MovieCardIcon } from '../Components/MovieCardIcon/MovieCardIcon';
import MovieCardEditDropdown from '../Components/MovieCardEditDropdown/MovieCardEditDropdown';

function MovieCard(props) {
    const [isShownIcon, setIsShownIcon] = useState(false);
    const [isShowDropdown, setIsShownDropdown] = useState(false);
    const onClick = () => setIsShownDropdown(true);

    return (
        <MemoryRouter>
            <MovieCardWrapper onMouseEnter={() => setIsShownIcon(true)}
                              onMouseLeave={() => setIsShownIcon(false)}>
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
        </MemoryRouter>
    )
};

MovieCard.protoTypes ={
    title: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired
}

export default memo(MovieCard);


