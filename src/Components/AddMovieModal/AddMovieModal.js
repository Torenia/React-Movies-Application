import React from 'react';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';

export default function AddMovieModal() {
    const options = [
        { label: 'Adventure', value: 'Adventure' },
        { label: 'Drama', value: 'Drama' },
        { label: 'Family', value: 'Family' },
        { label: 'Music', value: 'Music' },
        { label: 'Animation', value: 'Animation' }
    ];

    return (
        <AddEditMovieModalForm
            options={options}
            header="Add Movie"
            showMovieIdRow={false}
            buttonName="Submit"
        />
    )
};

