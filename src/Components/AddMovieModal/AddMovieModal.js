import React from 'react';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';

const options = [
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Family', value: 'Family' },
    { label: 'Music', value: 'Music' },
    { label: 'Animation', value: 'Animation' }
];

export default function AddMovieModal() {
    const genres = [];
    options.map(item=> genres.push(item.value));

    return (
        <AddEditMovieModalForm
            options={options}
            genres={genres}
            header="Add Movie"
            showMovieIdRow={false}
            buttonName="Submit"
        />
    )
};

