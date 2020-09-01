import React from 'react';
import PropTypes from 'prop-types';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';

export default function AddMovieModal( { isShownMovieModal }) {
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
            isShownMovieModal={isShownMovieModal}
        />
    )
};

AddMovieModal.propTypes = {
    isShownMovieModal: PropTypes.func
};

