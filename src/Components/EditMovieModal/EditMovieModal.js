import React from 'react';
import PropTypes from 'prop-types';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';

export default function EditMovieModal({ isShownMovieModal }) {
    const options = [
        { label: 'Adventure', value: 'Adventure' },
        { label: 'Music', value: 'Music' },
    ];

    return (
        <AddEditMovieModalForm
            options={options}
            header="Edit Movie"
            showMovieIdRow={true}
            buttonName="Save"
            isShownMovieModal={isShownMovieModal}
        />
    )
};

EditMovieModal.propTypes = {
    isShownMovieModal: PropTypes.func
};

