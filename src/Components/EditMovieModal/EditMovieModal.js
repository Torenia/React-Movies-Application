import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';
import { getMovieData } from '../../store/movies.reducer';

export default function EditMovieModal() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieData(id));
    }, [id]);

    return (
        <AddEditMovieModalForm
            header="Edit Movie"
            showMovieIdRow={true}
            buttonName="Save"
            movieId={id}
        />
    )
};
