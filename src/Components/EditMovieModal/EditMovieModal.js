import React from 'react';
import { useParams } from 'react-router-dom';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';

export default function EditMovieModal() {
    const { id } = useParams();

    return (
        <AddEditMovieModalForm
            header="Edit Movie"
            showMovieIdRow={true}
            buttonName="Save"
            movieId={id}
        />
    )
};
