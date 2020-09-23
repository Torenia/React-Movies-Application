import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieModalWindow } from '../MovieModalWindow/MovieModalWindow';
import { DeleteMovieModalWrapper } from '../DeleteMovieModalWrapper/DeleteMovieModalWrapper';
import { MovieModalHeader } from '../MovieModalHeader/MovieModalHeader';
import { Button } from '../Button/Button';
import { deleteMovie } from '../../store/movies.reducer';

export default function DeleteMovieModal(props) {
    const { id } = props.match.params;
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(store => store.error);

    const handleDeleteMovie = useCallback(async () => {
        try {
            const data = await dispatch(deleteMovie(id));
            if(!data.error){
                history.push('/');
            }
        } catch (e) {
            console.error(error);
            throw e;
        }
    }, [dispatch, id]);

    return (
        <MovieModalWindow>
            <DeleteMovieModalWrapper>
                <MovieModalHeader>
                    <Link to={'/'}>
                        <span/>
                    </Link>
                    <h1>Delete Movie</h1>
                </MovieModalHeader>
                <p>Are you sure you want to delete this movie?</p>
                <Button onClick={handleDeleteMovie}>Confirm</Button>
            </DeleteMovieModalWrapper>
        </MovieModalWindow>
    )
};

DeleteMovieModal.propTypes = {
    match: PropTypes.object.isRequired,
};
