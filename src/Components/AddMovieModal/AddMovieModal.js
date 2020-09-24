import React from 'react';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';

export default function AddMovieModal() {
    return (
        <AddEditMovieModalForm
            header="Add Movie"
            showMovieIdRow={false}
            buttonName="Submit"
        />
    )
};

