import React from 'react';
import PropTypes from 'prop-types';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';

export default function EditMovieModal({ isShowing, toggle }) {
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
            isShowing={isShowing}
            toggle={toggle}
        />
    )
};

EditMovieModal.propTypes = {
    isShowing: PropTypes.bool,
    toggle: PropTypes.func
};

