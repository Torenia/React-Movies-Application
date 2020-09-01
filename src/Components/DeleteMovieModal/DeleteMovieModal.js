import React from 'react';
import PropTypes from 'prop-types';

import { MovieModalWindow } from '../MovieModalWindow/MovieModalWindow';
import { DeleteMovieModalWrapper } from '../DeleteMovieModalWrapper/DeleteMovieModalWrapper';
import { MovieModalHeader } from '../MovieModalHeader/MovieModalHeader';
import { Button } from '../Button/Button';

export default function DeleteMovieModal({ isShownMovieModal }) {

    return (
        <MovieModalWindow>
            <DeleteMovieModalWrapper>
                <MovieModalHeader>
                    <span onClick={() => isShownMovieModal(false)}/>
                    <h1>Delete Movie</h1>
                </MovieModalHeader>
                <p>Are you sure you want to delete this movie?</p>
                <Button>Confirm</Button>
            </DeleteMovieModalWrapper>
        </MovieModalWindow>
    )
};

DeleteMovieModal.propTypes = {
    isShownMovieModal: PropTypes.func
};

