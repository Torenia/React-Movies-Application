import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { MovieModalWindow } from '../MovieModalWindow/MovieModalWindow';
import { DeleteMovieModalWrapper } from '../DeleteMovieModalWrapper/DeleteMovieModalWrapper';
import { MovieModalHeader } from '../MovieModalHeader/MovieModalHeader';
import { Button } from '../Button/Button';
import { deleteMovie } from '../../store/movies.reducer';

export default function DeleteMovieModal() {
    const { id } = useParams();
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

    const handleClose = useCallback(() => {
        history.push('/');
    }, []);

    return (
        <MovieModalWindow>
            <DeleteMovieModalWrapper>
                <MovieModalHeader>
                    <span onClick={handleClose} data-testid ="close-delete-movie-modal"/>
                    <h1>Delete Movie</h1>
                </MovieModalHeader>
                <p>Are you sure you want to delete this movie?</p>
                <Button onClick={handleDeleteMovie}>Confirm</Button>
            </DeleteMovieModalWrapper>
        </MovieModalWindow>
    )
};

